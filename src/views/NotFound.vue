<template>
  <div class="NotFound">
    <vue-title title=" | Not Found"></vue-title>
    <v-container>
      <v-img :src="notFound" contain />
    </v-container>
  </div>
</template>

<script>
import notFound from '@/assets/404.png';

export default {
  data: () => ({
    notFound
  })
};
</script>
