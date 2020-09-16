<template>
  <div>
    <v-col v-if="images.length === 1">
      <v-img
        v-for="(image, index) in images[0]"
        :key="index"
        :elevation="19"
        :src="image.url"
        :lazy-src="image.url"
        class="grey lighten-2 stuff"
      />
    </v-col>
    <SplitPanel
      v-else
      v-for="(panel, index) in images"
      :key="index"
      :panel="panel"
    />
  </div>
</template>

<script>
import SplitPanel from './SplitPanel';

export default {
  components: {
    SplitPanel
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>
