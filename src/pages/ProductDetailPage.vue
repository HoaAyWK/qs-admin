<template>
  <q-page>
    <base-container>
      <div class="full-width row items-center justify-between q-mt-lg">
        <div>
          <div class="text-h5">Product Details</div>
          <q-breadcrumbs active-color="primary" gutter="md" class="q-mt-md">
            <template #separator>
              <q-icon name="circle" size="0.5rem" />
            </template>
            <q-breadcrumbs-el to="/" label="Home" />
            <q-breadcrumbs-el to="/products" label="Products" />
            <q-breadcrumbs-el :label="product[0].name" />
          </q-breadcrumbs>
        </div>
      </div>
      <div class="row q-col-gutter-xl q-mt-lg">
        <div class="col-xs-12 col-sm-7">
          <q-carousel
            v-model="slide"
            swipeable
            animated
            infinite
            thumbnails
            class="full-height full-width"
          >
            <q-carousel-slide
              v-for="image in productImages"
              :key="image.name"
              :img-src="image.image"
              :name="image.name"
              style="height: auto"
            />
          </q-carousel>
        </div>
        <div class="col-xs-12 col-sm-5">
          <div class="column">
            <div class="q-mt-lg">
              <q-chip
                color="red-1"
                text-color="red-10"
                class="text-bold q-ma-none"
                >LOW STOCK</q-chip
              >
            </div>
            <div class="q-my-md">
              <div class="text-primary text-bold">NEW</div>
            </div>
            <div class="text-bold text-h6">
              {{ product[0].name }}
            </div>
            <div class="q-my-md row items-center">
              <q-rating
                :model-value="product[0].rating"
                readonly
                icon="star_border"
                icon-half="star_half"
                icon-selected="star"
                size="1.8rem"
                color="grey"
                :color-selected="ratingColors"
                color-half="amber-7"
                class="q-mr-sm"
              />
              <div class="text-grey-9">(9.9k reviews)</div>
            </div>
            <div class="q-mb-md text-h5 text-bold">${{ product[0].price }}</div>
            <q-separator />
            <div class="row items-center justify-between q-my-md">
              <div class="text-body1 text-bold">Color</div>
              <div class="row items-center q-gutter-sm">
                <q-radio
                  v-for="color in colors"
                  :key="color"
                  v-model="selectedColor"
                  checked-icon="check_circle"
                  unchecked-icon="circle"
                  :color="color"
                  :val="color"
                  keep-color
                  size="lg"
                  dense
                />
              </div>
            </div>
            <div class="row items-center justify-between q-my-md">
              <div class="text-body1 text-bold">Size</div>
              <q-select
                :options="sizes"
                options-dense
                v-model="selectedSize"
                outlined
                dense
              />
            </div>
            <div class="row items-center justify-between q-my-md">
              <div class="text-body1 text-bold">Qualtity</div>
              <div
                class="row items-center rounded-borders q-pa-xs"
                style="border: 1px solid #ccc"
              >
                <q-btn
                  flat
                  dense
                  icon="remove"
                  round
                  size="sm"
                  :disabled="disabledSub"
                  @click="subQualtityByOne"
                />
                <div class="q-mx-sm">{{ qualtity }}</div>
                <q-btn
                  flat
                  dense
                  icon="add"
                  round
                  size="sm"
                  :disabled="disabledAdd"
                  @click="addQualtityByOne"
                />
              </div>
            </div>
            <q-separator />
            <div class="row full-width items-center q-mt-sm">
              <q-btn
                color="orange"
                icon="add_shopping_cart"
                label="Add to Cart"
                style="width: 100%"
                no-caps
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-lg q-my-lg">
        <div
          class="col-xs-12 col-sm-4"
          v-for="feat in features"
          :key="feat.title"
        >
          <card-feature
            bg-light-color="teal-1"
            bg-dark-color="teal-10"
            color="green-14"
            :icon="feat.icon"
            :title="feat.title"
            :description="feat.description"
          />
        </div>
      </div>
      <div class="q-my-md">
        <q-card class="shadow-1">
          <q-tabs
            align="left"
            class="no-wrap product-tabs"
            no-caps
            v-model="tab"
          >
            <q-tab name="description" label="Description" />
            <q-tab name="reviews" label="Reviews" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab">
            <q-tab-panel name="description">
              <div class="q-my-md">
                <div class="text-body1 text-bold text-uppercase">
                  Specification
                </div>
                <div class="text-body2 q-my-md">
                  Leather panels. Laces. Rounded toe. Rubber sole.
                </div>
              </div>
              <div class="q-mt-xl q-mb-md">
                <div class="text-body1 text-bold text-uppercase">
                  MATERIAL AND WASHING INSTRUCTIONS
                </div>
                <div class="text-body2 q-my-md">
                  Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65%
                  polyester,35% cotton. Insole: 100% polyurethane. Sole: 100%
                  thermoplastic. Fixing sole: 100% glued.
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="reviews" class="q-pa-none">
              <div>
                <div class="rating">
                  <div class="rating-left q-pa-md">
                    <div class="row items-center justify-center q-my-lg">
                      <div>
                        <div
                          class="text-body1 text-bold text-blue-grey-5 text-center"
                        >
                          Average rating
                        </div>
                        <div class="text-h3 text-bold text-center q-my-md">
                          5/5
                        </div>
                        <q-rating
                          :model-value="product[0].rating"
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
                        <div
                          class="text-center text-subtitle2 text-blue-grey-5 q-mt-sm"
                        >
                          (241 reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rating-center q-pa-md">
                    <div class="column">
                      <div
                        class="row items-center q-col-gutter-md"
                        v-for="rating in ratingDetails"
                        :key="rating.value"
                      >
                        <div class="col-xs-3 text-body2 color-blue-grey-5">
                          {{ rating.value }}
                        </div>
                        <div class="col-xs-6">
                          <q-linear-progress :value="rating.progress" rounded />
                        </div>
                        <div class="col-xs-3 text-body2 color-blue-grey-5">
                          {{ rating.numOfRatings }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rating-right q-pa-md">
                    <div class="row items-center justify-center full-height">
                      <q-btn outline label="Write Your Review" icon="edit" />
                    </div>
                  </div>
                </div>
                <q-separator />
                <div class="q-my-lg">
                  <rating-item
                    v-for="review in reviews"
                    :key="review.id"
                    :review="review"
                  />
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </base-container>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import BaseContainer from 'src/components/common/BaseContainer.vue';
import CardFeature from 'src/components/cards/CardFeature.vue';
import RatingItem from 'src/components/ratings/RatingItem.vue';
import products from 'src/__mocks__/products';
import { Review } from 'src/components/models';

const ratingColors = ['amber-7', 'amber-7', 'amber-7', 'amber-7', 'amber-7'];
const ratingDetails = [
  {
    value: '5 Star',
    progress: 0.4,
    numOfRatings: 84,
  },
  {
    value: '4 Star',
    progress: 0.3,
    numOfRatings: 60,
  },
  {
    value: '3 Star',
    progress: 0.1,
    numOfRatings: 20,
  },
  {
    value: '2 Star',
    progress: 0.1,
    numOfRatings: 22,
  },
  {
    value: '1 Star',
    progress: 0.1,
    numOfRatings: 17,
  },
];
const colors = ['red', 'blue', 'green'];
const sizes = ['38', '39', '40', '41', '42'];
const productImages = [
  {
    name: 1,
    image:
      'https://api-prod-minimal-v4.vercel.app/assets/images/products/product_1.jpg',
  },
  {
    name: 2,
    image:
      'https://api-prod-minimal-v4.vercel.app/assets/images/products/product_2.jpg',
  },
  {
    name: 3,
    image:
      'https://api-prod-minimal-v4.vercel.app/assets/images/products/product_3.jpg',
  },
  {
    name: 4,
    image:
      'https://api-prod-minimal-v4.vercel.app/assets/images/products/product_4.jpg',
  },
];
const features = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'verified',
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'schedule',
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'verified_user',
  },
];
const reviews: Review[] = [
  {
    id: 1,
    star: 3.5,
    reviewer: 'Lucas Warrant',
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
    content:
      'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
    ratedDay: '02 Jan 2023',
  },
  {
    id: 2,
    star: 4,
    reviewer: 'Racce Chung',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
    content: 'Assumenda nam repudiandae rerum fugiat vel maxime.',
    ratedDay: '03 Jan 2023',
  },
];

const router = useRouter();
const {
  params: { id },
} = router.currentRoute.value;

const product = computed(() =>
  products.filter((product) => product.id.toString() === id)
);

const slide = ref(1);
const selectedColor = ref('green');
const selectedSize = ref('41');
const qualtity = ref(1);
const tab = ref<'description' | 'reviews'>('description');
const disabledSub = computed(() => (qualtity.value === 1 ? true : false));
const disabledAdd = computed(() => (qualtity.value > 5 ? true : false));

function addQualtityByOne() {
  qualtity.value += 1;
}

function subQualtityByOne() {
  qualtity.value -= 1;
}
</script>

<style scoped lang="scss">
.product-tabs {
  color: $blue-14;
  background-color: $grey-3;
}

.body--dark .product-tabs {
  background-color: $grey-9;
}

.rating {
  display: grid;
}

@media screen and (max-width: $breakpoint-xs-max) {
  .rating {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: $breakpoint-xs-max) {
  .rating {
    grid-template-columns: repeat(3, 1fr);
  }

  .rating-left {
    border-right: 1px dashed $grey-4;
  }

  .rating-right {
    border-left: 1px dashed $grey-4;
  }

  .body--dark .rating-left {
    border-right: 1px dashed $grey-8;
  }

  .body--dark .rating-right {
    border-left: 1px dashed $grey-8;
  }
}
</style>
