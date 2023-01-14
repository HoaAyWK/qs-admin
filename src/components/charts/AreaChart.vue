<template>
  <div id="area-chart">
    <apexchart
      type="area"
      :height="props.height"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';
const props = withDefaults(defineProps<{ height?: number }>(), {
  height: 500,
});

const series = [
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

function createOptions(themeMode: string) {
  const options = {
    chart: {
      height: props.height,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    theme: {
      mode: themeMode,
    },
  };

  return options;
}

const chartOptions = ref(createOptions('light'));
const $q = useQuasar();
watch(
  () => $q.dark.isActive,
  (dark: boolean) => {
    if (dark) {
      chartOptions.value = createOptions('dark');
    } else {
      chartOptions.value = createOptions('light');
    }
  }
);
</script>
