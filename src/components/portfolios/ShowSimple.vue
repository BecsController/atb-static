<template> 
  <div>
    <vue-title :title="' | ' + portfolio.title"></vue-title>
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1" md="8" class="mx-md-0">
        <v-img
          :elevation="19"
          :src="portfolio.index_url"
          :lazy-src="portfolio.index_url"
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
          v-for="(paragraph, index) in portfolio.paragraphs"
          :key="index"
          class="mx-md-0 my-5"
        >
          {{ paragraph }}
        </v-col>
        <ImagePanels :images="portfolio.images" />
        <v-col class="my-5" cols="10" offset="3" sm="3" offset-sm="5">
          <v-img
            :src="scrollImage"
            alt="Back To Top"
            aspect-ratio="1"
            :class="
              $vuetify.breakpoint.xsOnly
                ? 'scroll-button mobile'
                : 'scroll-button'
            "
            :width="$vuetify.breakpoint.xsOnly ? '40vw' : '10vw'"
            @click="toTop"
          >
          </v-img>
        </v-col>
      </v-col>
      <v-col cols="12" sm="8" md="4" class="ml-sm-9 ml-md-0">
        <v-list v-if="portfolio">
          <v-list-item-group v-for="info in this.metaInfo" :key="info.title">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="mb-2 font-weight-bold">
                  {{ info.title }}
                </v-list-item-title>
                <div v-if="info.title === 'Technical Skills'">
                  <v-list-item-group v-for="skill in info.content" :key="skill">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="ml-2">
                          {{ skill }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </div>
                <div v-if="info.title === 'Tags'">
                  <v-list-item-group v-for="tag in info.content" :key="tag">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="ml-2">
                          {{ tag }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </div>
                <div v-if="info.title === 'Release Date'" class="mt-3">
                  {{ info.content }}
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group>
            <v-divider class="my-2"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="mb-2 font-weight-bold">
                  {{ $t('share') }}
                  <v-icon>fas fa-share-alt</v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-row class="ml-2 mr-10" no-gutters>
              <v-hover v-slot:default="{ hover }">
                <v-col fluid="true" cols="2">
                  <twitter-button
                    :class="hover ? 'orange' : 'blue-grey lighten-3'"
                    v-bind:isBlank="true"
                    :shareDescription="portfolio.title"
                    btnText
                    width="5vw;"
                  />
                </v-col>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-col fluid="true" cols="2">
                  <facebook-button
                    v-bind:isBlank="true"
                    btnText
                    :class="hover ? 'orange' : 'blue-grey lighten-3'"
                  />
                </v-col>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-col fluid="true" cols="2">
                  <linked-in-button
                    v-bind:isBlank="true"
                    btnText
                    :class="hover ? 'orange' : 'blue-grey lighten-3'"
                  />
                </v-col>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-col fluid="true" cols="2">
                  <pinterest-button
                    v-bind:isBlank="true"
                    btnText
                    :class="hover ? 'orange' : 'blue-grey lighten-3'"
                  />
                </v-col>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-col fluid="true" cols="2">
                  <email-button
                    id="email-share-icon"
                    v-bind:isBlank="true"
                    :shareDescription="portfolio.title"
                    btnText
                    :class="hover ? 'orange' : 'blue-grey lighten-3'"
                  />
                </v-col>
              </v-hover>
            </v-row>
            <v-divider class="my-2 mt-5"></v-divider>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TwitterButton from 'vue-share-buttons/src/components/TwitterButton';
import FacebookButton from 'vue-share-buttons/src/components/FacebookButton';
import LinkedInButton from 'vue-share-buttons/src/components/LinkedInButton';
import PinterestButton from 'vue-share-buttons/src/components/PinterestButton';
import EmailButton from 'vue-share-buttons/src/components/EmailButton';
import ImagePanels from '@/components/images/ImagePanels';
import scrollImage from '@/assets/scroll.png';

export default {
  components: {
    TwitterButton,
    FacebookButton,
    LinkedInButton,
    PinterestButton,
    EmailButton,
    ImagePanels
  },
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    metaInfo: [],
    scrollImage
  }),
  mounted() {
    this.setMetaInfo();
  },
  computed: {
    skillListLabel() {
      if (this.portfolio.skills && this.portfolio.skills != '') {
        return this.portfolio.skills.split(',');
      }
      {
        return [];
      }
    }
  },
  methods: {
    setMetaInfo() {
      this.metaInfo = [
        {
          title: 'Technical Skills',
          content: this.skillListLabel
        },
        {
          title: 'Tags',
          content: this.portfolio.tags
        },
        {
          title: 'Release Date',
          content: this.portfolio.release_date
        }
      ];
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
