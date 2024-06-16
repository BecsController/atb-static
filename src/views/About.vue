<template>
  <div class="about">
    <v-col
      class="my-sm-10 my-0 pa-md-5 pa-lg-0"
      cols="12"
      xl="10"
      offset-xl="2"
    >
      <v-row>
        <v-col
          cols="12"
          sm="10"
          offset-sm="1"
          xl="4"
          lg="6"
          md="5"
          class="mr-md-0 ml-md-5 ml-lg-10 mx-xl-10 my-md-3"
        >
          <v-img
            src="https://atb-site.s3-ap-southeast-2.amazonaws.com/sliders/dafnis2.jpg"
          >
          </v-img>
        </v-col>
        <v-col
          class="ml-5 ml-md-2 mx-sm-10 pa-5 pa-md-0"
          xl="5"
          lg="5"
          md="6"
          cols="11"
        >
          <v-card :elevation="0">
            <div class="my-4">{{ $t('intro.one') }}</div>
            <div class="my-4">{{ $t('intro.two') }}</div>
            <div class="my-4">{{ $t('intro.three') }}</div>
            <div class="my-4">{{ $t('intro.four') }}</div>
            <div class="my-4">{{ $t('intro.five') }}</div>
            <div class="my-4">{{ $t('intro.six') }}</div>
          </v-card>
          <v-btn
            class="font-weight-bold text-white mt-7"
            color="orange"
            @click="goToContact()"
          >
            {{ $t('about.button') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  methods: {
    goToContact() {
      this.$router.push('/contact');
    }
  },
  setup () {
    useMeta({ title: 'Kowari Design | About' })
  }
};
</script>
