<template>
  <q-page :class="rightDrawerOpen ? 'page' : ''">
    <div class="fixed screen" v-show="rightDrawerOpen">
      <div class="fixed modal" @click="closeFilterPannel"></div>
      <div
        class="relative-position"
        style="height: 100vh; width: 100%"
        v-show="rightDrawerOpen"
      >
        <div
          class="right-drawer q-py-md q-pl-md shadow-15"
          v-show="rightDrawerOpen"
        >
          <div class="row items-center justify-between q-mr-md">
            <div class="text-h6">Filters</div>
            <q-btn dense flat icon="close" round @click="closeFilterPannel" />
          </div>
          <q-separator class="q-my-md" />
          <div style="padding-inline-end: 2px">
            <div class="filter-options">
              <q-expansion-item label="Gender" default-opened class="q-mb-lg">
                <div class="row items-center q-col-gutter-md">
                  <div class="col-xs-6">
                    <q-checkbox
                      v-model="genderSelections"
                      val="male"
                      label="Male"
                    />
                  </div>
                  <div class="col-xs-6">
                    <q-checkbox
                      v-model="genderSelections"
                      val="female"
                      label="Female"
                    />
                  </div>
                  <div class="col-xs-6">
                    <q-checkbox
                      v-model="genderSelections"
                      val="kids"
                      label="Kids"
                    />
                  </div>
                </div>
              </q-expansion-item>
              <q-expansion-item label="Categories" default-opened>
                <div class="row q-col-gutter-sm">
                  <div
                    class="col-xs-6"
                    v-for="category in categories"
                    :key="category.id"
                  >
                    <q-checkbox
                      v-model="categorySelections"
                      :val="category.name"
                      :label="category.name"
                    />
                  </div>
                </div>
              </q-expansion-item>
              <q-expansion-item label="Colors" default-opened class="q-mt-lg">
                <div class="row items-center q-col-gutter-xs">
                  <div
                    class="col-xs-3"
                    v-for="color in colors"
                    :key="color.name"
                  >
                    <q-checkbox
                      v-model="colorSelections"
                      :val="color.name"
                      checked-icon="check_circle"
                      unchecked-icon="circle"
                      :color="color.name"
                      keep-color
                      size="xl"
                    >
                      <q-tooltip
                        anchor="bottom middle"
                        self="center middle"
                        style="z-index: 10001"
                      >
                        {{ color.label }}
                      </q-tooltip>
                    </q-checkbox>
                  </div>
                </div>
              </q-expansion-item>
              <q-expansion-item label="Price" default-opened class="q-mt-lg">
                <div class="q-px-md q-mt-xl">
                  <q-range
                    :min="0"
                    :max="500"
                    marker-labels
                    :step="100"
                    v-model="priceRange"
                    label-always
                  />
                </div>
              </q-expansion-item>
            </div>
          </div>
          <div class="q-mr-md q-mt-md">
            <q-btn
              outline
              icon="delete"
              class="full-width"
              label="Clear"
              no-caps
            />
          </div>
        </div>
      </div>
    </div>
    <base-container>
      <div class="full-width row items-center justify-between q-mb-md">
        <div>
          <div class="text-h5">Products</div>
          <div>
            <q-breadcrumbs active-color="primary" gutter="md">
              <template #separator>
                <q-icon name="circle" size="0.5rem" />
              </template>
              <q-breadcrumbs-el label="Home" to="/" />
              <q-breadcrumbs-el label="Products" />
            </q-breadcrumbs>
          </div>
        </div>
        <q-btn
          icon="add"
          color="green-7"
          label="New Product"
          class="text-white"
          no-caps
        />
      </div>
      <div class="row items-center q-my-md justify-between">
        <div class="row items-center justify-between">
          <div></div>
          <q-input
            v-model="searchProducts"
            outlined
            dense
            placeholder="Search products"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="row items-center">
          <q-separator vertical inset />
          <q-btn
            flat
            color="purple"
            icon="filter_alt"
            dense
            label="Filter"
            no-caps
            class="q-mx-sm"
            @click="openFilterPannel"
          />
          <q-separator vertical inset class="q-mr-sm" />
          <div class="row items-center">
            <div class="text-bold q-mr-md">Sort by:</div>
            <q-select
              borderless
              v-model="selected"
              :options="options"
              style="min-width: 100px"
            />
          </div>
        </div>
      </div>
      <q-separator class="q-mb-md" />
      <div class="row q-col-gutter-md">
        <div
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          v-for="product in productsShow"
          :key="product.id"
        >
          <product-card :product="product" />
        </div>
      </div>
      <div class="q-mt-md row items-center justify-center">
        <q-pagination
          v-model="currentPage"
          :max="maxPage"
          boundary-links
          direction-links
        />
      </div>
    </base-container>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

import BaseContainer from 'src/components/common/BaseContainer.vue';
import ProductCard from 'src/components/cards/ProductCard.vue';
import products from 'src/__mocks__/products';

const options = ['Latest', 'Popular'];
const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Kitchen' },
  { id: 3, name: 'Electonics' },
  { id: 4, name: 'Books' },
  { id: 5, name: 'Fashion' },
  { id: 6, name: 'Toys' },
];
const colors = [
  { name: 'red', label: 'Red' },
  { name: 'blue', label: 'Blue' },
  { name: 'green', label: 'Green' },
  { name: 'yellow', label: 'Yellow' },
  { name: 'black', label: 'Black' },
  { name: 'grey', label: 'Grey' },
  { name: 'purple', label: 'Purple' },
];

const perPage = 8;
const maxPage = Math.ceil(products.length / perPage);

const rightDrawerOpen = ref(false);
const searchProducts = ref('');
const selected = ref('Latest');
const genderSelections = ref([]);
const categorySelections = ref([]);
const colorSelections = ref([]);
const priceRange = ref({ min: 50, max: 450 });
const currentPage = ref(1);

function openFilterPannel() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

function closeFilterPannel() {
  rightDrawerOpen.value = false;
}

watch(rightDrawerOpen, (value: boolean) => {
  document.body.style.overflow = value ? 'hidden' : '';
  document.body.style.paddingRight = value ? '17px' : '';
});

const productsShow = computed(() => {
  const skip = (currentPage.value - 1) * perPage;
  const take = currentPage.value * perPage;
  return products.slice(skip, take);
});
</script>

<style lang="scss">
.screen {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}

.modal {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}

.right-drawer {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  z-index: 10000;
  overflow: hidden;
}

.filter-options {
  max-height: 80vh;
  overflow-y: scroll;
  padding-inline-end: 1rem;
}

.filter-options::-webkit-scrollbar {
  width: 8px;
}

.filter-options::-webkit-scrollbar-thumb {
  background-color: $grey-5;
  border-radius: 5px;
}

.body--light .right-drawer {
  background-color: #fff;
}

.body--dark .right-drawer {
  background-color: $dark;
}
</style>
