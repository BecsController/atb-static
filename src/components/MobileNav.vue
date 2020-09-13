<template>
  <div>
    <v-toolbar-items>
      <v-row>
        <v-btn text>
          <v-icon @click="redirectToPath('/')">
            fas fa-home
          </v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/portfolios')">
            fas fa-folder-open
          </v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/blogs')">
            fas fa-pencil-alt
          </v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/about')">
            fas fa-info
          </v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/contact')">
            fas fa-envelope
          </v-icon>
        </v-btn>
      </v-row>
    </v-toolbar-items>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleDrawer() {
      this.$emit('input', !this.value);
    },
    redirectToPath(path) {
      this.$emit('input', !this.value);
      this.$router.push(path);
    }
  }
};
</script>
