<template>
  <div class="blogIndex">
    <CardList :entries="portfolios" />
  </div>
</template>

<script>
import CardList from '@/components/display/CardList';
import portfolios from '@/json/portfolios.json';
import { useMeta } from 'vue-meta'

export default {
  components: {
    CardList
  },
  data: () => ({
    portfolios: portfolios
  }),  
  setup () {
    useMeta({ title: 'Kowari Design | Portfolios' })
  },
};
</script>
