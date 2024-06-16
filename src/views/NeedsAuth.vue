<template>
  <div class="NeedsAuth">
    <v-container>
      <h1>Please sign in to continue</h1>
      <v-img src="404.png" contain />
    </v-container>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  data: () => ({
    message,
    fen
  }),
  setup () {
    useMeta({ title: 'Kowari Design | Sign in' })
  }
};
</script>
