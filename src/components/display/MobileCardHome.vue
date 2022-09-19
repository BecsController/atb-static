<template>
  <div>
    <div class="mb-5 text-center font-weight-black">
      {{ post.title }}
    </div>
    <router-link :to="`${post.type}/${post.id}`">
      <v-card flat tile class="d-flex ml-2 mr-1 mx-sm-0 mb-5">
        <v-img
          :src="post.feature_url"
          :lazy-src="post.feature_url"
          aspect-ratio="1"
          class="grey lighten-2"
          :ref="`card_img${post.id}`"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5">
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </router-link>
    <hr />
  </div>
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
