<template>
  <q-page>
    <div class="q-pa-md q-mt-md">
      <div class="row q-col-gutter-lg q-mb-md">
        <div class="col-xs-12 col-md-8">
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <card-info />
            </div>
            <div class="col-xs-12 col-sm-6">
              <total-user-card />
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="column q-col-gutter-md">
            <div class="col-12">
              <total-income-card />
            </div>
            <div class="col-12">
              <total-income-card />
            </div>
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-8">
          <q-card>
            <q-card-section>
              <bar-chart :height="500" />
            </q-card-section>
          </q-card>
          <q-card class="q-mt-md">
            <q-card-section>
              <area-chart :height="500" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-4">
          <q-card>
            <q-card-section>
              <div class="row items-center justify-between">
                <div>
                  <p class="q-ma-none text-body1 text-weight-bold">
                    Popular Stocks
                  </p>
                </div>
                <div>
                  <q-btn color="primary" flat dense round icon="more_horiz">
                    <q-menu anchor="bottom end" self="top end">
                      <q-item clickable class="q-my-none q-py-none">
                        <q-item-section>Today</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>This Month</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>This Year</q-item-section>
                      </q-item>
                    </q-menu>
                  </q-btn>
                </div>
              </div>
              <q-card class="shadow-0 bg-deep-purple-2 q-py-none">
                <q-card-section class="q-pa-none">
                  <profit-chart :height="95" />
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AreaChart from 'src/components/charts/AreaChart.vue';
import BarChart from 'src/components/charts/BarChart.vue';
import CardInfo from 'src/components/cards/CardInfo.vue';
import TotalUserCard from 'src/components/cards/TotalUserCard.vue';
import TotalIncomeCard from 'src/components/cards/TotalIncomeCard.vue';
import ProfitChart from 'src/components/charts/ProfitChart.vue';
</script>
