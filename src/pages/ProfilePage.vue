<template>
  <q-page>
    <div class="container">
      <div class="full-width">
        <div class="full-width cover-image">
          <q-btn
            dense
            color="blue-14"
            class="absolute btn-change-cover"
            icon="image"
            label="Change Cover"
            no-caps
          />
        </div>
        <div class="row items-center no-wrap justify-between q-mt-lg">
          <div class="row items-center">
            <q-avatar class="q-mr-md avatar">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="avatar" />
            </q-avatar>
            <div class="column no-wrap">
              <p class="name q-ma-none">Sioay Sioay</p>
              <p class="role text-uppercase text-grey-8 q-ma-none">
                Fullstack Developer
              </p>
            </div>
          </div>
          <div class="gt-sm row no-wrap">
            <q-btn
              outline
              icon="person_add"
              label="Connect"
              color="blue-14"
              no-caps
              class="q-mr-sm"
            />
            <q-btn
              icon="textsms"
              label="Send Message"
              color="blue-14"
              no-caps
            />
          </div>
        </div>
      </div>
      <div class="q-mt-md">
        <q-tabs v-model="tab" class="no-wrap text-blue-14" no-caps align="left">
          <q-tab name="general" label="Timeline"></q-tab>
          <q-tab name="connections" label="Connections"></q-tab>
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab">
          <q-tab-panel name="general" class="q-px-xs">
            <div class="row q-gutter-col-md">
              <div class="col-xs-12 col-sm-4">
                <q-card class="shadow-1">
                  <q-card-section>
                    <div class="row items-center text-body1 text-bold q-py-md">
                      Profile Progress
                    </div>
                  </q-card-section>
                  <q-separator />
                  <q-card-section>
                    <q-linear-progress :value="0.5" class="q-my-md" />
                    <div class="text-grey-8">50% Set Up Complete</div>
                  </q-card-section>
                </q-card>
                <q-card class="q-mt-md shadow-1">
                  <q-card-section>
                    <div class="text-body1 text-bold q-py-md">About</div>
                  </q-card-section>
                  <q-separator />
                  <q-card-section>
                    <div class="text-body2 text-grey-8">
                      "Everyone thinks of changing the world, but no one thinks
                      of changing himself."
                    </div>
                    <q-item class="q-mt-sm">
                      <q-item-section avatar>
                        <q-icon name="work_outline" color="blue-grey-7" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label> Fullstack Developer </q-item-label>
                        <q-item-label caption>
                          Past: Student at UTE
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator inset />
                    <q-item class="q-my-sm">
                      <q-item-section avatar>
                        <q-icon name="school" color="blue-grey-7" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>
                          Ho Chi Minh City University of Education and
                          Technology
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator inset />
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="location_on" color="blue-grey-7" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label
                          >Thu Duc City, Ho Chi Minh City, Viet
                          Nam</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="connections" class="q-px-xs">
            <q-card class="shadow-1">
              <q-card-section>
                <div class="flex no-wrap items-center justify-between">
                  <div class="text-body1 text-bold">Connections</div>
                  <div>
                    <q-input
                      outlined
                      dense
                      placeholder="Search connections"
                      v-model="searchConnections"
                    >
                      <template #prepend>
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </div>
                </div>
              </q-card-section>
              <q-separator class="separator" />
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div
                    class="col-xs-12 col-sm-6"
                    v-for="connection in connections"
                    :key="connection.avatar"
                  >
                    <connection-card :connection="connection" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ConnectionCard from 'src/components/cards/ConnectionCard.vue';
import { Connection } from 'src/components/models';

const connections: Connection[] = [
  {
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
    numbOfConnections: 4,
    name: 'Lucas Warrant',
    status: 'Connected',
  },
  {
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    numbOfConnections: 2,
    name: 'Enzo Martinez',
    status: 'Connected',
  },
  {
    avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
    numbOfConnections: 1,
    name: 'Mira Lux',
    status: 'Pending',
  },
];
const tab = ref<'general' | 'connections'>('general');
const searchConnections = ref('');
</script>

<style scoped lang="scss">
.cover-image {
  background-image: url(../assets/static/mock-images/mountant.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: none;
  border-radius: 8px;
  position: relative;
}

.btn-change-cover {
  bottom: 15px;
  right: 10px;
}

@media screen and (max-width: $breakpoint-xs-max) {
  .container {
    padding-inline: 1rem;
    padding-block-start: 1.5rem;
  }

  .cover-image {
    height: 250px;
  }

  .name {
    font-weight: 500;
  }

  .role {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: $breakpoint-xs-max) {
  .container {
    padding-inline: 2rem;
    padding-block-start: 2rem;
  }

  .cover-image {
    height: 350px;
  }

  .avatar {
    width: 56px;
    height: 56px;
  }

  .role {
    font-size: 0.8rem;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
