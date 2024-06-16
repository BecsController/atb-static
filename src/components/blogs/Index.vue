<template>
  <div class="blogIndex">
    <CardList :entries="blogs" />
  </div>
</template>

<script>
import CardList from '@/components/display/CardList';
import blogs from '@/json/blogs.json';
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({ title: 'Kowari Design | Blogs' })
  },
  components: {
    CardList
  },
  data: () => ({
    blogs: blogs
  })
};
</script>
