<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="my-1" cols="10" sm="6" align-self="center">
        <h1
          class="font-weight-bold mb-3 "
          :class="[$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-6']"
        >
          {{ $t("home.title") }}
        </h1>
        <p
          class=" font-weight-medium"
          :class="[$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'subtitle-2']"
        >
          {{ $t("home.presentation") }}
        </p>
        <p
          class="font-weight-medium"
          :class="[$vuetify.breakpoint.smAndUp ? 'subtitle-1' : 'subtitle-2']"
          v-html="$t('home.advice')"
        ></p>
        <p
          :class="[$vuetify.breakpoint.smAndUp ? 'subtitle-2' : 'caption']"
          v-html="$t('home.disclaimer')"
        ></p>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="red"
          class="my-2 white--text"
          x-large
          @click.prevent="start"
        >
          {{ $t("home.start-button") }}
          <v-icon dark x-large>
            mdi-play-circle-outline
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",

  data: () => ({
    disclaimer: false,
  }),

  methods: {
    ...mapActions(["setTest"]),
    async start() {
      await this.setTest();
      await this.$router.push("/first");
    },
  },
};
</script>
