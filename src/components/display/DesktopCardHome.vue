<template>
  <router-link :to="`${post.type}/${post.id}`"       style="text-decoration: none; color: inherit;">
    <v-card flat tile class="d-flex ml-2 mr-1 mx-sm-0">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-img
          v-bind="props"
          :src="post.feature_url"
          :lazy-src="post.feature_url"
          :ref="`card_img${post.id}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <v-fade-transition>
            <div
              v-if="isHovering"
              :v-model="isHovering"
              class="d-flex align-center transition-fast-in-fast-out bg-black opacity-20 text-white position-absolute h-3 font-weight-bold text-center"
              style="height: 100%; width: 100%;"
            >
              {{ post.title }}
            </div>
          </v-fade-transition>
        </v-img>
      </v-hover>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5">
          </v-progress-circular>
        </v-row>
      </template>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
