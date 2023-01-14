<template>
  <div class="column items-center justify-center p-px-lg q-py-lg" q-my-md>
    <div :class="iconWrapperClass" style="border-radius: 50%">
      <q-icon :name="icon" size="lg" :color="color" />
    </div>
    <div class="text-h6 text-bold q-my-md">{{ title }}</div>
    <div class="text-body1 text-center text-grey-9">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useQuasar } from 'quasar';

const props = defineProps<{
  bgLightColor: string;
  bgDarkColor: string;
  color: string;
  icon: string;
  title: string;
  description: string;
}>();

const $q = useQuasar();
const bgLightClass = `bg-${props.bgLightColor} q-pa-md`;
const iconWrapperClass = ref(bgLightClass);

watch(
  () => $q.dark.isActive,
  (dark: boolean) => {
    if (dark) {
      iconWrapperClass.value = `bg-${props.bgDarkColor} q-pa-md`;
    } else {
      iconWrapperClass.value = bgLightClass;
    }
  }
);
</script>

<style lang="scss" scoped></style>
