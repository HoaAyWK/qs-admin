<template>
  <q-btn dense flat no-wrap round>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="avatar" />
    </q-avatar>
    <q-menu auto-close>
      <q-list>
        <q-item>
          <q-item-section>
            <div class="row justify-between">
              <div>
                <div class="text-body1">Sioay</div>
                <div class="subtitle">sioay@gmail.com</div>
              </div>
              <div style="min-width: 100px" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-ripple to="/profile">
          <q-item-section avatar class="item-icon">
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section> Profile </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar class="item-icon">
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section> Settings </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-ripple>
          <q-item-section avatar class="item-icon">
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section> Logout </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<style scoped lang="scss">
.subtitle {
  font-weight: 500;
  color: $blue-grey-6;
}

.item-icon {
  min-width: 24px;
}
</style>
