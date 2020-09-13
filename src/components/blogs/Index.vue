<template>
  <div class="blogIndex">
    <vue-title title=" | Blogs"></vue-title>
    <CardList :entries="blogs" />
  </div>
</template>

<script>
import CardList from '@/components/display/CardList';
import blogs from '@/json/blogs.json';

export default {
  components: {
    CardList
  },
  data: () => ({
    blogs: blogs
  })
};
</script>
