<template>
  <div class="error-page">
    <vue-title title=" | Not Found"></vue-title>
    <v-col cols="12" sm="10" offset-sm="1">
      <v-row
        align="center"
        :class="[
          $vuetify.breakpoint.xsOnly
            ? 'error-box ma-1'
            : 'error-box mt-10 pa-10'
        ]"
      >
        <v-col cols="12" sm="5" offset-sm="1">
          <v-img :src="message" />
          <v-col cols="8" offset="4">
            <v-btn
              color="orange"
              class="white--text"
              @click="$router.push('/')"
            >
              {{ $t('error.button') }}
            </v-btn>
          </v-col>
        </v-col>
        <v-col cols="12" sm="5" offset-sm="1">
          <v-img
            :width="{ '10': !$vuetify.breakpoint.xsOnly }"
            :class="{ 'mt-16': !$vuetify.breakpoint.xsOnly }"
            :src="fen"
          />
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import message from '@/assets/404_message.png';
import fen from '@/assets/404_fen.png';

export default {
  data: () => ({
    message,
    fen
  })
};
</script>
