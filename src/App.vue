<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Vue from 'vue';
import Title from '@/views/Title';

Vue.component('vue-title', Title);

export default {
  name: 'Home',
  components: {
    NavBar
  }
};
</script>
