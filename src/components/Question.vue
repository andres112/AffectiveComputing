<template>
  <v-container>
    <v-row class="mt-10 text-center" justify="center">
      <v-col class="my-2" cols="6">
        <p class="title font-weight-medium" v-html="current_question"></p>
      </v-col>
      <v-col class="my-1 d-flex justify-center" cols="10">
        <div class="mx-6">
          <p class="title font-weight-small">{{ $t("third.yes") }}</p>
          <v-btn color="success" fab large dark outlined id="yes" @click="next('yes')">
            <v-icon>mdi-thumb-up-outline</v-icon>
          </v-btn>
        </div>
        <div class="mx-6 ">
          <p class="title font-weight-small">{{ $t("third.no") }}</p>
          <v-btn color="red" fab large dark outlined @click="next('no')">
            <v-icon>mdi-thumb-down-outline</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "Question",
  data: () => ({}),
  props: {
    current_question: String,
  },
  methods: {
    ...mapMutations(["changeDialogState", "setCurrentAnswer"]),
    next(res) {
      this.setCurrentAnswer(res)
      this.changeDialogState(true);
    },
  },
};
</script>
