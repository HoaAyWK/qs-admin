<template>
  <q-layout view="lHh LpR lff">
    <q-header class="shadow-2">
      <q-toolbar class="navbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div class="row items-center">
          <q-btn
            dense
            round
            :icon="isDarkMode ? 'light_mode' : 'dark_mode'"
            @click="toggleDarkMode"
            class="q-mr-sm"
          />
          <account-popover v-if="authenticated" />
          <router-link to="/login" class="login-btn" v-else>
            Login
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/users" exact>
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Users</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item expand-separator icon="shopping_bag" label="Products">
          <q-item to="/products" exact>
            <q-item-section avatar />
            <q-item-section>
              <q-item-label>Products</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="shadow-2">
      <q-toolbar class="q-px-lg">
        <div>
          <span class="text-body1">
            © 2023 Sioay, Inc. All rights reversed.
          </span>
        </div>
        <q-space />
        <div class="row social-medias">
          <a
            v-for="socialMedia in socialMedias"
            :key="socialMedia.path"
            :href="socialMedia.path"
            target="_blank"
          >
            <i-iconify
              :icon="socialMedia.icon"
              width="24"
              height="24"
              class="q-mr-sm"
            />
          </a>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import AccountPopover from 'src/components/AccountPopover.vue';

const socialMedias = [
  {
    icon: 'mdi:github',
    path: 'https://github.com',
  },
  {
    icon: 'ic:baseline-facebook',
    path: 'https://fb.com',
  },
  {
    icon: 'ph:youtube-logo-fill',
    path: 'https://youtube.com',
  },
  {
    icon: 'mdi:instagram',
    path: 'https://instagram.com',
  },
];

const leftDrawerOpen = ref(false);
const authenticated = ref(true);

const $q = useQuasar();
const isDarkMode = ref($q.dark.isActive);

function toggleDarkMode() {
  $q.dark.toggle();
  isDarkMode.value = !isDarkMode.value;
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss" scoped>
.body--light {
  background-color: rgb(249, 250, 252);
}
.q-layout__section--marginal {
  background-color: transparent;
}

.body--light .navbar {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
}

.body--light .q-header {
  color: black;
}

.body--light .q-footer {
  color: $grey-8;
}

.login-btn {
  text-decoration: none;
  border: 2px solid white;
  color: black;
  border-radius: 10%;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  font-weight: bold;
}

.login-btn:hover {
  border: 2px solid $grey-8;
}

.body--dark .login-btn {
  border: 2px solid $dark-page;
  color: $grey-5;
}

.body--dark .login-btn:hover {
  color: $grey-7;
}

.social-medias a {
  text-decoration: none;
  color: $grey-9;
}

.body--dark .social-medias a {
  color: $grey-2;
}

.social-medias a svg {
  padding: 0.2rem;
  border-radius: 50%;
}

.body--dark .social-medias a:hover svg {
  background-color: $grey-9;
}

.body--light .social-medias a:hover svg {
  background-color: $grey-4;
}
</style>
