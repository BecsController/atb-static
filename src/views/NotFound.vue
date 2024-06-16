<template>
  <div class="error-page">
    <v-col cols="12" sm="10" offset-sm="1">
      <v-row
        align="center"
        :class="[
          $vuetify.display.smAndDown
            ? 'error-box ma-1'
            : 'error-box mt-10 pa-10'
        ]"
      >
        <v-col cols="12" sm="5" offset-sm="1">
          <v-img :src="message" />
          <v-col cols="8" offset="4">
            <v-btn
              color="orange"
              class="text-white"
              @click="$router.push('/')"
            >
              {{ $t('error.button') }}
            </v-btn>
          </v-col>
        </v-col>
        <v-col cols="12" sm="5" offset-sm="1">
          <v-img
            :width="{ '10': !$vuetify.display.smAndDown }"
            :class="{ 'mt-16': !$vuetify.display.smAndDown }"
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
import { useMeta } from 'vue-meta'

export default {
  data: () => ({
    message,
    fen
  }),
  setup () {
    useMeta({ title: 'Kowari Design | Not Found' })
  }
};
</script>
