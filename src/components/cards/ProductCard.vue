<template>
  <div class="card-transition">
    <q-card class="product-card shadow-1">
      <router-link :to="'/products/' + product.id">
        <q-img :src="product.image" :alt="product.name" />
      </router-link>
      <q-card-section>
        <div>
          <router-link
            :to="'/products/' + product.id"
            class="text-body1 text-bold text-grey-9 product-name"
          >
            {{ product.name }}
          </router-link>
        </div>
        <div class="text-body2 text-grey-7 q-my-sm">
          {{ product.description }}
        </div>
        <div class="row items-center">
          <q-rating
            :model-value="product.rating"
            readonly
            icon="star_border"
            icon-half="star_half"
            icon-selected="star"
            size="1.5rem"
            color="grey"
            :color-selected="ratingColors"
            color-half="amber-7"
            class="q-mr-sm"
          />
          <div class="text-grey">(12.99+)</div>
        </div>
        <div class="row items-center justify-between q-mt-md">
          <div class="text-bold text-body1">${{ product.price }}</div>
          <q-btn icon="shopping_cart" color="blue" size="0.8rem" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { Product } from '../models';

const ratingColors = ['amber-7', 'amber-7', 'amber-7', 'amber-7', 'amber-7'];

defineProps<{ product: Product }>();
</script>

<style scoped lang="scss">
.product-card {
  widows: 100%;
  min-height: 250px;
}

.product-name {
  text-decoration: none;
}

.product-name:hover {
  text-decoration: underline;
}

.card-transition:hover {
  transition: all 0.4s ease-in-out 0s;
  transform: scale3d(1.02, 1.02, 1);
  box-shadow: rgb(32 40 45 / 8%) 0px 2px 14px 0px;
}

.card-transition {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
</style>
