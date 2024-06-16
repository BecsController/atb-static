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
                :class="{ 'mb-3': $vuetify.display.smAndDown }"
              >
                <v-hover v-slot:default="{ isHovering, props }">
                  <v-card tile class="ml-2 mr-1 mx-sm-0" :min-width="$vuetify.display.smAndDown ? '500' : ''">
                    <router-link
                      style="text-decoration: none; color: inherit;"
                      :to="`${entry.type}/${entry.id}`"
                    >
                      <v-img
                        v-bind="props"
                        :src="entry.index_url"
                        :lazy-src="entry.index_url"
                        aspect-ratio="2"
                        class="grey lighten-2"
                        :ref="`card_img${entry.id}`"
                      >
                        <v-fade-transition>
                          <div
                            v-if="isHovering"
                            class="d-flex transition-fast-in-fast-out bg-black opacity-20"
                            transition="fade-transition"
                            align="center"
                            :absolute="absolute"
                            style="height: 100%;"
                          >
                          </div>
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
