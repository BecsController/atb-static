<template>
  <v-col cols="12" md="12" lg="8" offset-lg="2">
    <div v-if="loading"></div>
    <div v-else>
      <v-row>
        <v-col cols="12" pa-xs-0 md="8" offset-md="1">
          <v-row>
            <v-col v-if="$vuetify.display.smAndUp" cols="2">
              <v-img
                :elevation="19"
                :src="blog.header_url"
                aspect-ratio="1"
                :lazy-src="blog.header_url"
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
            <v-col :cols="$vuetify.display.smAndDown ? '12' : '10'">
              <h1>{{ blog.title }}</h1>
              {{ blog.date }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="10" offset-md="1">
          <v-img
            :elevation="19"
            :src="blog.feature_url"
            :aspect-ratio="blog.feature_aspect"
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
            :class="`mx-md-0 my-5 ${paragraph.classes}`"
          >
            {{ paragraph.text }}
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
                <v-icon icon="mdi-arrow-left-bold-circle" />
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
                <v-icon icon="mdi-arrow-right-bold-circle" />
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
import { useMeta } from 'vue-meta'

export default {
    setup () {
    useMeta({ title: 'Kowari Design | Blog' })
  },
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
