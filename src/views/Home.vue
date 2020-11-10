<template>
  <div cols="12" md="10" offset-md="1" class="my-5">
    <vue-title title=" | Home"></vue-title>
    <v-row>
      <v-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <v-carousel
          cycle
          :height="sliderHeight()"
          hide-delimiters
          show-arrows-on-hover
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
        <v-tabs right :show-arrows="$vuetify.breakpoint.xsOnly">
          <v-tab
            class="subtitle-2 font-weight-light"
            @click.stop="resetFilter()"
          >
            {{ $t('tags.all') }}
          </v-tab>
          <v-tab
            v-for="tag in tags"
            :key="tag.id"
            class="subtitle-2 font-weight-light"
            @click.stop="filterByTags(tag.name)"
          >
            {{ tag.name }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <v-col align="right" justify="right" class="mt-n1">
          <v-menu
            v-model="filterMenu"
            transition="slide-y-transition"
            :close-on-content-click="false"
            bottom
          >
            <template class="my-n1" v-slot:activator="{ on, attrs }">
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
              <v-list-item-group v-model="sort" active-class="orange--text">
                <v-list-item
                  v-for="(item, index) in sortItems"
                  :key="index"
                  @click="changeOrder(item.name)"
                >
                  <v-list-item-title>
                    {{ $t(item.label) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
              <v-list-item-group v-model="filter" active-class="orange--text">
                <v-list-item
                  v-for="(item, index) in filterItems"
                  :key="index"
                  @click="filterType(item.name)"
                >
                  <v-list-item-title>
                    {{ $t(item.label) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
              <v-list>
                <v-divider v-show="filterOn"></v-divider>
                <v-list-item
                  v-show="filterOn"
                  @click="resetFilter"
                  color="orange"
                >
                  <v-list-item-title>{{ $t('order.reset') }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-list>
          </v-menu>
        </v-col>
        <v-card :elevation="0" class="activityCard">
          <v-container fluid>
            <v-row>
              <v-col
                v-for="post in shownActivity"
                :key="`${post.id}${post.type}`"
                class="d-flex child-flex"
                cols="12"
                sm="3"
              >
                <v-lazy
                  v-model="isActive"
                  :options="{
                    threshold: 0.5
                  }"
                  min-height="200"
                  transition="fade-transition"
                >
                  <v-hover v-slot:default="{ hover }">
                    <div>
                      <div
                        v-if="$vuetify.breakpoint.xsOnly"
                        class="mb-2 text-center font-weight-black"
                      >
                        {{ post.title }}
                      </div>
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
                    </div>
                  </v-hover>
                </v-lazy>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-col cols="12" sm="12" md="6" offset-md="3">
      <v-divider id="testimonial-divider"></v-divider>
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="10"
      offset-md="1"
      lg="8"
      offset-lg="2"
      xl="5"
      offset-xl="5"
    >
      <v-carousel
        cycle
        :height="$vuetify.breakpoint.xsOnly ? '20vw' : '10vw'"
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
                :class="[
                  $vuetify.breakpoint.xsOnly
                    ? 'text-caption text--secondary mobile'
                    : 'font-weight-black text--secondary',
                  'testimonial'
                ]"
              >
                {{ testimonial.testimonial }}
              </div>
              <div
                justify="right"
                align="right"
                :class="
                  $vuetify.breakpoint.xsOnly
                    ? 'text-caption text--secondary'
                    : 'text--secondary'
                "
              >
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
import sliders from '@/json/sliders.json';
import streamData from '@/json/stream.json';
import tags from '@/json/tags.json';
import testimonials from '@/json/testimonials.json';

var _ = require('lodash');

export default {
  data: () => ({
    sliderImages: sliders,
    shownActivity: streamData,
    isActive: true,
    testimonials: testimonials,
    tags: tags,
    sort: null,
    filter: null,
    filterOn: false,
    resetOn: false,
    filterMenu: false,
    sortItems: [
      {
        name: 'title',
        label: 'order.title'
      },
      {
        name: 'created_at',
        label: 'order.date'
      }
    ],
    filterItems: [
      {
        name: 'portfolio',
        label: 'order.portfolio'
      },
      {
        name: 'blog',
        label: 'order.blog'
      }
    ]
  }),
  methods: {
    filterByTags(name) {
      this.shownActivity = streamData.filter(
        p => p.tags && p.tags.includes(name)
      );
      this.filterOn = true;
    },
    filterType(name) {
      this.filterOn = true;
      this.shownActivity = streamData.filter(post => post.type == name);
    },
    resetFilter() {
      this.filterOn = false;
      this.shownActivity = streamData;
      this.filter = null;
      this.sort = null;
      this.filterMenu = false;
    },
    sliderHeight() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return '35vw;';
      }
      {
        return '25vw;';
      }
    },
    changeOrder(newOrder) {
      this.filterOn = true;
      let order = newOrder === 'title' ? 'asc' : 'desc';
      this.shownActivity = _.orderBy(this.shownActivity, newOrder, order);
    }
  }
};
</script>
