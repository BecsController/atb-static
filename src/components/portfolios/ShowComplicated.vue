<template> 
  <div>
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1" md="8" class="mx-md-0">
        <v-carousel
          cycle
          :height="sliderHeight()"
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(image, i) in portfolio.sliderImages[0]"
            :key="i"
            :src="image.url"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          </v-carousel-item>
        </v-carousel>
        <v-col cols="12">
          <v-col
            v-for="(paragraph, index) in portfolio.paragraphs"
            :key="index"
            class="mx-md-0 my-5"
          >
            <div
              v-if="paragraph.headline"
              class="mb-5 text-h4 font-weight-bold mb-1"
              style="letter-spacing: 0.01em!important"
            >
              {{ paragraph.headline }}
            </div>

            <div
              v-if="paragraph.subtitle"
              class="mb-3 text-h6 font-weight-bold"
            >
              {{ paragraph.subtitle }}
            </div>

            <div
              v-for="(text, index) in paragraph.text"
              :key="index"
              class="mb-2"
            >
              <p>
                {{ text }}
              </p>
            </div>
            <div v-if="paragraph.images">
              <ImagePanels :images="paragraph.images" />
            </div>
            <div v-if="paragraph.video" style="text-align: center;">
              <video key="video" width="650" autoplay muted loop playsinline>
                <source :src="paragraph.video.url" type="video/mp4" />
              </video>
            </div>
          </v-col>
        </v-col>
        <v-col class="my-5" cols="10" offset="3" sm="3" offset-sm="5">
          <v-img
            :src="scrollImage"
            alt="Back To Top"
            aspect-ratio="1"
            :class="
              $vuetify.display.xsOnly
                ? 'scroll-button mobile'
                : 'scroll-button'
            "
            :width="$vuetify.display.xsOnly ? '40vw' : '10vw'"
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
import { useMeta } from 'vue-meta'

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
  mounted() {
    this.setMetaInfo();
  },
  setup () {
    useMeta({ title: "Kowari Design | Portfolio" })
  },
  data: () => ({
    metaInfo: [],
    scrollImage
  }),
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
    sliderHeight() {
      if (this.$vuetify.display.smAndDown) {
        return '40vw';
      }
      {
        return '30vw';
      }
    },
    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>