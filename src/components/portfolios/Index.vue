<template>
  <div class="blogIndex">
    <vue-title title=" | Portfolios"></vue-title>
    <CardList :entries="portfolios" />
  </div>
</template>

<script>
import CardList from '@/components/display/CardList';
import portfolios from '@/json/portfolios.json';

export default {
  components: {
    CardList
  },
  data: () => ({
    portfolios: portfolios
  })
};
</script>
