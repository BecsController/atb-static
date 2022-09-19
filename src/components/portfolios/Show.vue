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
      <div v-if="portfolio.simple">
        <ShowSimple :portfolio="portfolio" />
      </div>
      <div v-else>
        <ShowComplicated :portfolio="portfolio" />
      </div>
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
import scrollImage from '@/assets/scroll.png';
import ShowComplicated from './ShowComplicated';
import ShowSimple from './ShowSimple';

export default {
  components: {
    ShowComplicated,
    ShowSimple
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
  methods: {
    loadPortfolio() {
      const id = this.$route.params.id;
      this.portfolio = portfolios.find(p => p.id == id);
      if (this.portfolio) {
        this.loading = !this.loading;
      } else {
        this.$router.push('/not_found');
      }
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
