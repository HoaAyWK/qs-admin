<template>
  <q-card class="shadow-0 card">
    <q-item>
      <q-item-section avatar>
        <q-avatar size="3.5rem">
          <img :src="connection.avatar" alt="avatar" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ connection.name }}</q-item-label>
        <q-item-label caption
          >{{
            connection.numbOfConnections > 1
              ? `${connection.numbOfConnections} connections`
              : `${connection.numbOfConnections} connection`
          }}
          in common</q-item-label
        >
        <q-item-label>
          <q-chip
            :label="connection.status"
            :color="connection.status === 'Connected' ? 'green-4' : 'purple'"
            :class="
              connection.status === 'Connected'
                ? 'text-bold text-green-10'
                : 'text-bold text-white'
            "
            size="sm"
          />
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn dense flat color="primary" icon="more_horiz" />
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script setup lang="ts">
import { Connection } from '../models';

defineProps<{
  connection: Connection;
}>();
</script>

<style scoped lang="scss">
.body--light .card {
  border: 1px solid #ddd;
}

.body--dark .card {
  border: 1px solid #555;
}
</style>
