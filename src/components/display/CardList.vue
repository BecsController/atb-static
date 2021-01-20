<template>
  <div>
    <v-col cols="12" sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
      <v-card :elevation="0">
        <v-container fluid>
          <v-lazy
            :options="{
              threshold: 0.5
            }"
            min-height="200"
            transition="fade-transition"
          >
            <v-row>
              <v-col
                v-for="entry in entries"
                :key="entry.id"
                class="d-flex child-flex"
                cols="12"
                sm="4"
                :class="{ 'mb-3': $vuetify.breakpoint.xsOnly }"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card tile class="ml-2 mr-1 mx-sm-0">
                    <router-link
                      style="text-decoration: none; color: inherit;"
                      :to="`${entry.type}/${entry.id}`"
                    >
                      <v-img
                        :src="entry.index_url"
                        :lazy-src="entry.index_url"
                        aspect-ratio="2"
                        class="grey lighten-2"
                        :ref="`card_img${entry.id}`"
                      >
                        <v-fade-transition>
                          <v-overlay
                            v-if="hover"
                            class="d-flex transition-slow-in-slow-out"
                            align="center"
                            absolute
                            style="height: 100%;"
                          >
                          </v-overlay>
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
                      <v-card-subtitle
                        class="pb-0 font-weight-black title no-dec-link"
                      >
                        {{ entry.title }}
                      </v-card-subtitle>
                      <v-card-text class="text--secondary mt-3">
                        <div class="body-2 no-dec-link">
                          {{ entry.excerpt }}
                        </div>
                      </v-card-text>
                    </router-link>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-lazy>
        </v-container>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    entries: {
      type: Array,
      required: true
    }
  }
};
</script>
