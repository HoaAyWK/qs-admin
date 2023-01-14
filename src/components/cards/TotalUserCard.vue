<template>
  <q-card class="bg-blue-7 card-info full-width">
    <q-card-section>
      <div class="column q-col-gutter-md">
        <div class="row items-center justify-between">
          <div class="card-icon">
            <q-icon name="group" size="1.2rem" />
          </div>
        </div>
        <div class="row items-center q-col-gutter-md">
          <p class="text-h4 q-ma-none">$500</p>
          <div class="bg-blue-9 q-ml-sm q-pa-xs" style="border-radius: 50%">
            <q-icon name="trending_up" color="green-12" size="1.2rem" />
          </div>
        </div>
        <div>
          <p class="text-body1">Total Earning</p>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.card-info {
  overflow: hidden;
  position: relative;
  color: white;
}

.card-info::after {
  content: '""';
  position: absolute;
  width: 210px;
  height: 210px;
  background: $blue-9;
  border-radius: 50%;
  top: -85px;
  right: -95px;
}

.card-info::before {
  content: '""';
  position: absolute;
  width: 210px;
  height: 210px;
  background: $blue-9;
  border-radius: 50%;
  top: -125px;
  right: -15px;
  opacity: 0.5;
}

.card-icon {
  padding: 0.5rem;
  background-color: $blue-9;
  border-radius: 20%;
}
</style>
