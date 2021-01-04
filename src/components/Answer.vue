<template>
  <v-container>
    <v-row class="mt-10 text-center" justify="center">
      <v-col class="my-2" cols="6">
        <p class="title font-weight-medium" v-html="current_answer"></p>
      </v-col>
      <v-col class="my-1 d-flex justify-center" cols="10">
        <v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="800"
          max-width="1000"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="red"
          class="my-2 white--text"
          large
          type="submit"
          @click="next"
        >
          {{ $t("third.next_button") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  name: "Answer",
  data: () => ({}),
  props: {
    current_answer: String,
  },
  methods: {
    ...mapMutations(["changeDialogState", "nextDialogStep"]),
    next() {
      this.changeDialogState(false);
      this.nextDialogStep()
    },
  },
};
</script>
