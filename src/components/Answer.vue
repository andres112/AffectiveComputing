<template>
  <v-container>
    <v-row class="mt-10 text-center" justify="center">
      <v-col class="my-2" cols="6">
        <p
          class="font-weight-medium"
          :class="[$vuetify.breakpoint.smAndUp ? 'title' : 'subtitle-1']"
          v-html="current_answer[$i18n.locale]"
        ></p>
      </v-col>
      <v-col
        class="my-1 d-flex justify-center"
        cols="11"
        v-if="current_answer.img"
      >
        <v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="800"
          max-width="100%"
          :src="current_answer.img"
          transition="fade-transition"
          aspect-ratio="1.2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col
        class="my-1 d-flex justify-center"
        cols="10"
        v-if="current_answer.audio"
      >
        <audio controls :src="current_answer.audio" preload="auto" autoplay>
          Your browser does not support the audio tag.
        </audio>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="red"
          class="my-2 white--text"
          large
          type="submit"
          @click.prevent="next"
        >
          {{ $t("third.next_button") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { copyText } from "@/assets/helpers.js";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Answer",
  props: {
    current_answer: Object,
  },
  computed: { ...mapState(["step", "dialog", "test_id"]) },
  methods: {
    ...mapMutations(["changeDialogState", "nextDialogStep"]),
    ...mapActions(["updateTest"]),
    async next() {
      if (this.step < 5) {
        this.changeDialogState(false);
        this.nextDialogStep();
      } else {
        const payload = {
          id: this.test_id,
          content: {
            dialog: this.dialog,
          },
        };
        try {
          await this.updateTest(payload);
          await copyText(this.test_id);
          this.$router.push("/final");
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
