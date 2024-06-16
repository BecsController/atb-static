<template>
  <v-app>
    <v-main>
      <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `Kowari Design` }}</template>
      </metainfo>
      <NavBar />
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  name: 'Home',
  components: {
    NavBar
  }
};
</script>
