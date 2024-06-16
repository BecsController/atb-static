<template>
  <div>
    <v-toolbar-items>
      <v-row>
        <v-btn text>
          <v-icon @click="redirectToPath('/')" icon="mdi-home" size="26px" />
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/portfolios')" icon="mdi-folder" size="26px" />
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/blogs')" icon="mdi-pencil" size="26px"  />
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/about')" icon="mdi-information" size="26px" />
        </v-btn>
        <v-btn text>
          <v-icon @click="redirectToPath('/contact')" icon="mdi-email" size="26px" />
        </v-btn>
      </v-row>
    </v-toolbar-items>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
