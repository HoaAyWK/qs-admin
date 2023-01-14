<template>
  <div id="bar-chart">
    <apexchart
      :type="props.type"
      :height="props.height"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { watch } from 'vue';

const props = withDefaults(defineProps<{ type?: string; height?: number }>(), {
  type: 'bar',
  height: 500,
});

function createOptions(
  xaxisColor: string,
  dataColor: string,
  chartTitleColors: string,
  themeMode: string
) {
  const options = {
    chart: {
      height: props.height,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
        borderRadius: '4%',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: [dataColor],
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        show: true,
        style: {
          colors: xaxisColor,
          cssClass: 'chart-labels',
        },
      },
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: number) {
          return val + '%';
        },
      },
    },
    title: {
      text: 'Montly Inflation in Argentina, 2002',
      floating: true,
      offsetY: 480,
      align: 'center',
      style: {
        color: chartTitleColors,
        cssClass: 'chart-title',
      },
    },
    theme: {
      mode: themeMode,
    },
  };

  return options;
}

const series = [
  {
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
  },
];

const chartOptions = ref(createOptions('#000', '#222', '#444', 'light'));

const $q = useQuasar();
watch(
  () => $q.dark.isActive,
  (dark) => {
    if (dark) {
      chartOptions.value = createOptions('#fff', '#fff', '#fff', 'dark');
    } else {
      chartOptions.value = createOptions('#000', '#222', '#444', 'light');
    }
  }
);
</script>

<style scoped lang="scss"></style>
