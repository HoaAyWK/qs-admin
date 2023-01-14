<template>
  <div>
    <div id="profit-chart">
      <apexchart
        type="area"
        :options="options"
        :series="series"
        :heigth="props.height"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ height: number }>(), { height: 95 });
const options = {
  chart: {
    type: 'area',
    height: props.height,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  theme: {
    palette: 'palette8',
  },
};

const series = [
  {
    name: 'series1',
    data: [10, 20, 14, 18, 12, 19, 22],
  },
];
</script>
