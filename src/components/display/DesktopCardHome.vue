<template>
  <v-hover v-slot:default="{ hover }">
    <v-card flat tile class="d-flex ml-2 mr-1 mx-sm-0">
      <v-img
        :src="post.feature_url"
        :lazy-src="post.feature_url"
        aspect-ratio="1"
        class="grey lighten-2"
        :ref="`card_img${post.id}`"
      >
        <v-fade-transition>
          <router-link :to="`${post.type}/${post.id}`">
            <v-overlay
              v-if="hover"
              class="d-flex transition-slow-in-slow-out v-card--reveal title white--text"
              align="center"
              absolute
              style="height: 100%;"
            >
              {{ post.title }}
            </v-overlay>
          </router-link>
        </v-fade-transition>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5">
            </v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </v-hover>
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
