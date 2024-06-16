<template>
  <div class="error-page mt-n10" cover>
    <v-spacer class="mb-10"> </v-spacer>
    <v-col cols="10" offset="1">
      <v-row align="center" class="mt-10 pa-10 error-box">
        <v-col cols="5" offset="1" align-self="start">
          <v-img class="message" :src="message" />
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
        <v-col cols="5" offset="1" align-self="end">
          <v-img class="mt-16 fen" :src="fen" />
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import message from '@/assets/500_message.png';
import fen from '@/assets/404_fen.png';
import { useMeta } from 'vue-meta'

export default {
  data: () => ({
    message,
    fen
  }),
  setup () {
    useMeta({ title: 'Kowari Design | Error' })
  }
};
</script>
