<template>
  <v-col
    cols="12"
    md="12"
    lg="8"
    offset-lg="2"
    :class="$vuetify.breakpoint.xsOnly ? 'mb-12' : 'my-12'"
  >
    <div v-if="loading"></div>
    <div v-else>
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
                  <div v-if="info.title === 'Skills Involved'">
                    <v-list-item-group
                      v-for="skill in info.content"
                      :key="skill"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="ml-2">
                            {{ skill }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </div>
                  <div v-else class="mt-3">
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
    <v-row>
      <v-hover v-slot:default="{ hover }">
        <v-col v-if="portfolio.previous_portfolio" cols="6" sm="4">
          <v-card
            :to="`/portfolio/${portfolio.previous_portfolio.id}`"
            :elevation="0"
          >
            <v-row no-gutters="">
              <v-col :class="hover ? 'title' : 'subtitle-1'" cols="3">
                <v-icon>fas fa-long-arrow-alt-left</v-icon>
              </v-col>
              <v-col cols="9">
                <div class="text--secondary">
                  {{ $t('previous_portfolio') }}
                </div>
                <div class="font-weight-black">
                  {{ portfolio.previous_portfolio.title }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-hover>
      <v-hover v-slot:default="{ hover }">
        <v-col
          right
          v-if="portfolio.next_portfolio"
          cols="6"
          sm="4"
          :offset-sm="portfolio.previous_portfolio ? '4' : '8'"
        >
          <v-card
            :to="`/portfolio/${portfolio.next_portfolio.id}`"
            :elevation="0"
          >
            <v-row no-gutters="">
              <v-col cols="9">
                <div class="text--secondary">{{ $t('next_portfolio') }}</div>
                <div class="font-weight-black">
                  {{ portfolio.next_portfolio.title }}
                </div>
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
import portfolios from '@/json/portfolios.json';
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
  data: () => ({
    portfolio: {},
    tagNames: '',
    metaInfo: [],
    loading: true,
    rating: 0,
    ratingClicked: false,
    userRating: 0,
    scrollImage
  }),
  mounted() {
    this.loadPortfolio();
  },
  computed: {
    tagNameLabel() {
      if (this.portfolio.tags && this.portfolio.tags.length > 0) {
        return this.portfolio.tags.join(', ');
      }
      {
        return '';
      }
    },
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
    loadPortfolio() {
      const id = this.$route.params.id;
      this.portfolio = portfolios.find(p => p.id == id);
      if (this.portfolio) {
        this.setMetaInfo();
        this.loading = !this.loading;
      } else {
        this.$router.push('/not_found');
      }
    },
    setMetaInfo() {
      this.metaInfo = [
        {
          title: 'Skills Involved',
          content: this.skillListLabel
        },
        {
          title: 'Tags',
          content: this.tagNameLabel
        },
        {
          title: 'Client Name',
          content: this.portfolio.client_name
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
