<template>
  <div class="Error">
    <vue-title title=" | Error"></vue-title>
    <v-container>
      <v-img :src="errorPage" contain />
    </v-container>
  </div>
</template>

<script>
import errorPage from '@/assets/500.png';

export default {
  data: () => ({
    errorPage
  })
};
</script>
