<template>
  <React.Fragment>
    <router-link 
      style="text-decoration: none; color: inherit;"
      :to="`${post.type}/${post.id}`"
    >
      <v-card flat tile class="d-flex ml-2 mr-1 mb-0">
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
      <div class="text-center caption">
        {{ post.title }}
      </div>
    </router-link>
  </React.Fragment>
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
