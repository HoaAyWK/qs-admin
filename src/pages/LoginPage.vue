<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="container-login">
          <div class="column justify-center items-center">
            <router-link to="/" class="logo-wrapper">
              <img
                src="../assets/quasar-logo-vertical.svg"
                alt="logo"
                class="logo"
              />
            </router-link>
            <h1 class="title">Login to Sioay</h1>
          </div>
          <div class="text-center">
            <p class="text-subtitle1">Enter your email address and password.</p>
            <div class="row justify-center">
              <div class="col-xs-10 col-sm-6 col-md-4 col-lg-3">
                <q-form>
                  <q-input
                    v-model="email"
                    outlined
                    label="Email"
                    dense
                    class="q-py-sm"
                  >
                    <template #prepend> <q-icon name="email" /> </template>
                  </q-input>
                  <q-input
                    v-model="password"
                    type="password"
                    outlined
                    label="Password"
                    dense
                    class="q-py-sm"
                  >
                    <template #prepend> <q-icon name="lock" /> </template>
                  </q-input>
                  <div class="q-py-sm">
                    <router-link to="#"> Forgot your password? </router-link>
                  </div>
                  <q-btn class="full-width q-pt-sm" color="secondary">
                    Login
                  </q-btn>
                </q-form>
                <div class="q-pt-lg">
                  <p class="text-body2">
                    Don't have any account?
                    <router-link to="#">Sign up</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center page-footer">
            <p class="text-body2">
              By signing in to Sioay, you agree to our
              <router-link to="#">terms of service</router-link>
            </p>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>

<style scoped lang="scss">
.container-login {
  min-height: calc(100vh - 2rem);
  position: relative;
}

.logo-wrapper:hover {
  cursor: pointer;
}

.logo {
  height: 10rem;
  padding: 1rem;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #313bffe4);
}

.title {
  font-size: 2.5rem;
  margin-block-start: 0rem;
}

.page-footer {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
}
</style>
