<template>
  <div>
    <v-toolbar color="orange">
      <MobileNav v-model="drawer" v-if="$vuetify.breakpoint.xsOnly" />
      <v-row v-if="!$vuetify.breakpoint.xsOnly">
        <v-toolbar-title class="ml-3" @click="redirectToPath('/')">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-img
              :elevation="19"
              :src="logoblack"
              width="250px"
              :lazy-src="logoblack"
              alt="Kowari Design"
              :style="hover ? 'filter: brightness(0) invert(1);' : ''"
            />
          </v-hover>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items v-if="drawer === false">
          <v-btn class="font-weight-bold" text @click="redirectToPath('/')">
            {{ $t('nav_links.home') }}
          </v-btn>
          <v-btn
            class="font-weight-bold"
            text
            @click="redirectToPath('/portfolios')"
          >
            {{ $t('nav_links.portfolio') }}
          </v-btn>
          <v-btn
            class="font-weight-bold"
            text
            @click="redirectToPath('/blogs')"
          >
            {{ $t('nav_links.blog') }}
          </v-btn>
          <v-btn
            class="font-weight-bold"
            text
            @click="redirectToPath('/about')"
          >
            {{ $t('nav_links.about') }}
          </v-btn>
          <v-btn
            class="font-weight-bold"
            text
            @click="redirectToPath('/contact')"
          >
            {{ $t('nav_links.contact') }}
          </v-btn>
        </v-toolbar-items>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav.vue';
import logoblack from '@/assets/logomono.png';

export default {
  components: {
    MobileNav
  },
  data: () => ({
    drawer: false,
    logoblack
  }),
  watch: {
    value() {
      this.toggleDrawer();
    }
  },
  methods: {
    redirectToPath(path) {
      this.$router.push(path);
    },
    toggleDrawer() {
      return this.value;
    }
  }
};
</script>
