<template>
  <div class="contact">
    <v-col cols="12" md="8" offset-md="2">
      <div class="display-1 font-weight-bold text-orange mt-10">
        {{ $t('contact.title') }}
      </div>
      <div class="subtitle my-5">
        {{ $t('contact.subtitle') }}
      </div>
      <v-card class="elevation-1">
        <v-card-text>
          <v-form>
            <v-text-field
              label="Name"
              name="name"
              type="text"
              v-model="name"
            ></v-text-field>

            <v-text-field
              label="Email"
              name="email"
              type="text"
              v-model="email"
            ></v-text-field>

            <v-text-field
              label="Website"
              name="website"
              type="text"
              v-model="website"
            ></v-text-field>
            <v-textarea name="message" label="Message" v-model="message">
            </v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn @click="validateLogin" color="orange" class="white-text">
            {{ $t('submit') }}
          </v-btn>
          <v-btn variant="outlined" @click="resetForm" class="reset">
            {{ $t('reset') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import SweetAlert from '@/services/SweetAlert';
import * as emailjs from 'emailjs-com';
import { useMeta } from 'vue-meta'

export default {
  data() {
    return {
      name: '',
      email: '',
      website: '',
      message: ''
    };
  },
  setup () {
    useMeta({ title: 'Kowari Design | Contact' })
  },
  methods: {
    resetForm() {
      this.name = '';
      this.email = '';
      this.website = '';
      this.message = '';
    },
    validateLogin() {
      const messageDetails = {
        email: this.email,
        name: this.name,
        message: this.message,
        website: this.website
      };
      emailjs
        .send(
          process.env.VUE_APP_EMAIL_SERVICE,
          process.env.VUE_APP_EMAIL_TEMPLATE,
          messageDetails,
          process.env.VUE_APP_EMAIL_USER_ID
        )
        .then(() => {
          this.$router.push('/');
          this.resetForm();
          SweetAlert.successfulEmail();
        })
        .catch(() => {
          this.resetForm();
          SweetAlert.failureOnRequest();
        });
    }
  }
};
</script>
