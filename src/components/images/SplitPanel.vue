<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(image, index) in panel"
          :key="index"
          :class="columnCount"
        >
          <v-img
            :elevation="19"
            :src="image.url"
            :lazy-src="image.url"
            class="grey lighten-2 stuff"
          />
          <v-subheader
            v-if="image.text"
            :class="[$vuetify.display.smAndDown ? 'mobile' : '', image.classes]"
          >
            {{ image.text }}
          </v-subheader>
          <v-spacer v-if="!image.text" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    panel: {
      type: Array,
      required: true
    }
  },
  computed: {
    columnCount() {
      return `col-${12 / this.panel.length}`;
    }
  }
};
</script>
