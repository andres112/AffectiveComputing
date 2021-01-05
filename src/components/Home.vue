<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="my-1" cols="6" align-self="center">
        <h1 class="display-3 font-weight-bold mb-3 ">
          {{ $t("home.title") }}
        </h1>
        <p class="subtitle-1 font-weight-medium">
          {{ $t("home.presentation") }}
        </p>
        <p class="subtitle-1 font-weight-medium" v-html="$t('home.advice')"></p>
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

  data: () => ({}),

  methods: {
    ...mapActions(["setTest"]),
    async start() {
      await this.setTest();
      await this.$router.push("/first");
    },
  },
};
</script>
