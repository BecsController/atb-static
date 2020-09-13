<template>
  <v-row>
    <v-hover v-slot:default="{ hover }">
      <v-col cols="10">
        <span
          @click="redirectToPath('show')"
          :class="hover ? 'orange--text text darken-3' : ''"
        >
          {{ item.title }}
        </span>
      </v-col>
    </v-hover>
    <v-hover v-slot:default="{ hover }">
      <v-col cols="1">
        <v-icon @click="emit" :color="hover ? 'red' : 'black'">
          fas fa-skull
        </v-icon>
      </v-col>
    </v-hover>
    <v-hover v-slot:default="{ hover }">
      <v-col cols="1">
        <v-icon
          @click="redirectToPath('edit')"
          :color="hover ? 'green' : 'black'"
        >
          fas fa-edit
        </v-icon>
      </v-col>
    </v-hover>
  </v-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    emit() {
      this.$emit('open', this.item.type, this.item.id);
    },
    redirectToPath(type) {
      const path =
        type === 'edit'
          ? `/${this.item.type}/${this.item.id}/edit`
          : `/${this.item.type}/${this.item.id}`;
      this.$router.push(path);
    }
  }
};
</script>
