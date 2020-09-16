<template>
  <v-col cols="12" lg="10" offset-lg="1" class="mb-12">
    <div v-if="loading"></div>
    <div v-else>
      <vue-title :title="' | ' + blog.title"></vue-title>
      <v-row>
        <v-col cols="12" sm="10" offset-sm="1">
          <v-row>
            <v-col v-if="!$vuetify.breakpoint.xsOnly" cols="2">
              <v-img
                :elevation="19"
                :src="blog.feature_url"
                aspect-ratio="1"
                :lazy-src="blog.feature_url"
                class="grey lighten-2 stuff"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.xsOnly ? '12' : '10'">
              <h1>{{ blog.title }}</h1>
              {{ blog.date }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="10" offset-sm="1">
          <v-img
            :elevation="19"
            :src="blog.feature_url"
            aspect-ratio="1"
            :lazy-src="blog.feature_url"
            class="grey lighten-2 stuff"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-col
            v-for="(paragraph, index) in blog.paragraphs"
            :key="index"
            class="mx-sm-9 mx-md-0 my-5 ck-content"
          >
            {{ paragraph }}
          </v-col>
          <ImagePanels :images="blog.images" />
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-hover v-slot:default="{ hover }">
        <v-col v-if="blog.previous_blog" col="6" sm="4" md="3" offset-md="1">
          <v-card :to="`/blog/${blog.previous_blog.id}`" :elevation="0">
            <v-row no-gutters="">
              <v-col :class="hover ? 'title' : 'subtitle-1'" cols="3">
                <v-icon>fas fa-long-arrow-alt-left</v-icon>
              </v-col>
              <v-col cols="9">
                <div class="text--secondary">{{ $t('previous_blog') }}</div>
                <div class="font-weight-black">
                  {{ blog.previous_blog.title }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-hover>
      <v-hover v-slot:default="{ hover }">
        <v-col
          right
          v-if="blog.next_blog"
          col="6"
          sm="4"
          :offset-sm="blog.previous_blog ? '4' : '8'"
        >
          <v-card :to="`/blog/${blog.next_blog.id}`" :elevation="0">
            <v-row no-gutters="">
              <v-col cols="9">
                <div class="text--secondary">{{ $t('next_blog') }}</div>
                <div class="font-weight-black">{{ blog.next_blog.title }}</div>
              </v-col>
              <v-col :class="hover ? 'title' : 'subtitle-1'" cols="3">
                <v-icon>fas fa-long-arrow-alt-right</v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-hover>
    </v-row>
  </v-col>
</template>

<script>
import blogs from '@/json/blogs.json';
import ImagePanels from '@/components/images/ImagePanels';

export default {
  components: {
    ImagePanels
  },
  data: () => ({
    blog: {},
    loading: true
  }),
  mounted() {
    this.loadBlog();
  },
  methods: {
    loadBlog() {
      const id = this.$route.params.id;
      this.blog = blogs.find(blog => blog.id == id);
      if (this.blog) {
        this.loading = !this.loading;
      } else {
        this.$router.push('/not_found');
      }
    }
  }
};
</script>
