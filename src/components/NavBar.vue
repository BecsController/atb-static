<template>
  <div>
    <v-toolbar color="orange">
      <MobileNav v-if="$vuetify.display.smAndDown" />
      <v-row v-if="$vuetify.display.mdAndUp">
        <v-toolbar-title class="ml-3" @click="goHome">
          <v-hover v-slot:default="{ isHovering, props }" open-delay="200">
            <v-img
              v-bind="props"
              :elevation="19"
              :src="isHovering ? logowhite : logoorange"
              width="250px"
              :lazy-src="logoorange"
              alt="Kowari Design"
            />
          </v-hover>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items v-if="drawer === false">
          <v-btn class="font-weight-bold" text @click="goHome">
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
import logoorange from '@/assets/logo-orange.png';
import logowhite from '@/assets/logo-white.png';

export default {
  components: {
    MobileNav
  },
  data: () => ({
    drawer: false,
    logoorange,
    logowhite
  }),
  watch: {
    value() {
      this.toggleDrawer();
    }
  },
  methods: {
    redirectToPath(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    toggleDrawer() {
      return this.value;
    },
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    }
  }
};
</script>
