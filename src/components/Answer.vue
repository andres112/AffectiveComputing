<template>
  <v-container>
    <v-row class="mt-10 text-center" justify="center">
      <v-col class="my-2" cols="6">
        <p class="title font-weight-medium" v-html="current_answer[$i18n.locale]"></p>
      </v-col>
      <v-col class="my-1 d-flex justify-center" cols="10" v-if="current_answer.img">
        <v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="800"
          max-width="1000"
          :src="current_answer.img"
        ></v-img>
      </v-col>
      <v-col class="my-1 d-flex justify-center" cols="10" v-if="current_answer.audio">
        <vuetify-audio
          :file="current_answer.audio"
          color="primary"
          flat
        ></vuetify-audio>
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
import VuetifyAudio from "vuetify-audio";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Answer",
  data: () => ({}),
  components: { VuetifyAudio },
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
          this.$router.push("/final");
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
