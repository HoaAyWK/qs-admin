<template>
  <div class="rating-item row q-col-gutter-md q-my-sm">
    <div class="col-xs-12 col-sm-3 col-md-2">
      <div class="column items-center reviewer">
        <q-avatar size="4.5rem">
          <img :src="review.avatar" />
        </q-avatar>
        <p class="text-body1 text-bold q-my-sm">{{ review.reviewer }}</p>
        <p class="text-bobdy2 text-blue-grey-5">{{ review.ratedDay }}</p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-10">
      <div class="q-px-md">
        <div>
          <q-rating
            :model-value="review.star"
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
        </div>
        <div class="q-my-sm text-body2 text-blue-grey-5">
          {{ review.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Review } from 'src/components/models';
defineProps<{ review: Review }>();

const ratingColors = ['amber-7', 'amber-7', 'amber-7', 'amber-7', 'amber-7'];
</script>

<style scoped lang="scss">
@media screen and (max-width: $breakpoint-xs-max) {
  .reviewer {
    justify-content: flex-start;
  }
}

@media screen and (min-width: $breakpoint-xs-max) {
  .reviewer {
    justify-content: center;
  }
}
</style>
