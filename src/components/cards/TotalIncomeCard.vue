<template>
  <q-card class="full-width bg-blue-7 text-white card-info">
    <q-card-section>
      <div class="row items-center">
        <div class="card-icon">
          <q-icon name="storefront" size="2rem" />
        </div>
        <div class="column">
          <p class="text-body1 q-ma-none">$200</p>
          <p class="text-body2 q-ma-none">Total income</p>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.card-info {
  overflow: hidden;
  position: relative;
}

.card-info::after {
  content: '""';
  position: absolute;
  width: 210px;
  height: 210px;
  background: linear-gradient(
    210.04deg,
    white -50.94%,
    rgba(144, 202, 249, 0) 83.49%
  );
  border-radius: 50%;
  top: -30px;
  right: -180px;
}

.card-icon::before {
  content: '""';
  position: absolute;
  width: 210px;
  height: 210px;
  background: linear-gradient(
    140.9deg,
    white -14.02%,
    rgba(144, 202, 249, 0) 70.5%
  );
  border-radius: 50%;
  top: -160px;
  right: -130px;
}
.card-icon {
  background-color: $blue-9;
  padding: 0.5rem;
  border-radius: 20%;
  margin-inline-end: 0.5rem;
}
</style>
