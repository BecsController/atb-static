<template>
  <div cols="12" sm="10" offset-sm="1" class="my-5">
    <vue-title title=" | Home"></vue-title>
    <v-row>
      <v-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <v-carousel
          cycle
          :show-arrows="showArrows()"
          :height="sliderHeight()"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(image, i) in sliderImages"
            :key="i"
            :src="image.url"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <v-tabs right show-arrows>
          <v-tab
            class="subtitle-1 font-weight-light"
            @click.stop="resetFilter()"
          >
            {{ $t('tags.all') }}
          </v-tab>
          <v-tab
            v-for="tag in tags"
            :key="tag.id"
            class="subtitle-1"
            @click.stop="filter(tag.name)"
          >
            {{ tag.name }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <v-col align="right" justify="right" class="mt-n1">
          <v-menu transition="slide-y-transition" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" outlined color="grey">
                <span class="mr-1">
                  {{ $t('order.label') }}
                </span>
                <v-icon small color="grey-lighten-1">
                  fas fa-caret-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="changeOrder('title')">
                <v-list-item-title>{{ $t('order.title') }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="changeOrder('created_at')">
                <v-list-item-title>{{ $t('order.date') }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-card :elevation="0" class="activityCard">
          <v-container fluid>
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: 0.5
              }"
              min-height="200"
              transition="fade-transition"
            >
              <v-row>
                <v-col
                  v-for="post in shownActivity"
                  :key="`${post.id}${post.type}`"
                  class="d-flex child-flex"
                  cols="12"
                  sm="3"
                >
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
                              class="d-flex transition-slow-in-slow-out v-card--reveal display-1 white--text"
                              align="center"
                              absolute
                              style="height: 100%;"
                            >
                              {{ post.title }}
                            </v-overlay>
                          </router-link>
                        </v-fade-transition>
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            >
                            </v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-lazy>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-col cols="12" sm="12" md="6" offset-md="3">
      <v-divider id="testimonial-divider"></v-divider>
    </v-col>
    <v-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
      <v-carousel
        cycle
        height="10vw"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            no-gutters=""
          >
            <v-col cols="2">
              <v-icon light large>
                fas fa-quote-left
              </v-icon>
            </v-col>
            <v-col cols="7">
              <div
                justify="right"
                align="right"
                class="text--secondary"
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'caption'
                    : 'font-weight-black'
                "
              >
                {{ testimonial.testimonial }}
              </div>
              <div justify="right" align="right" class="text--secondary">
                {{ testimonial.author }}
              </div>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </div>
</template>

<script>
import logo from '@/assets/sliderImages/logo.png';
import slider_eight from '@/assets/sliderImages/slider_eight.png';
import stream from '@/json/stream.json';
import tags from '@/json/tags.json';
import testimonials from '@/json/testimonials.json';

var _ = require('lodash');

export default {
  data: () => ({
    sliderImages: [{ url: slider_eight }, { url: logo }],
    shownActivity: stream,
    animate: false,
    isActive: true,
    testimonials: testimonials,
    tags: tags,
    allStreamPosts: stream
  }),
  methods: {
    filter(name) {
      this.shownActivity = this.allStreamPosts.filter(
        p => p.tags && p.tags.includes(name)
      );
    },
    resetFilter() {
      this.shownActivity = this.allStreamPosts;
    },
    sliderHeight() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return '60vw;';
      }
      {
        return '25vw;';
      }
    },
    showArrows() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return false;
      }
      {
        return true;
      }
    },
    changeOrder(newOrder) {
      let order = newOrder === 'title' ? 'asc' : 'desc';
      this.shownActivity = _.orderBy(this.shownActivity, newOrder, order);
    }
  }
};
</script>
