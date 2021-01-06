<template>
  <div>
    <language></language>
    <question v-if="!isAnswer" :current_question="getQuestion"></question>
    <answer v-if="isAnswer" :current_answer="getAnswer"></answer>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import Question from "../components/Question.vue";
import Answer from "../components/Answer.vue";

import { mapMutations, mapState } from "vuex";
import dialog from "@/assets/dialog.json";

export default {
  name: "Third",
  components: { Language, Question, Answer },
  data() {
    return {
      conversation: null, // load only empathic or non-empathic dialog
    };
  },
  computed: {
    ...mapState(["empathy", "isAnswer", "step", "dialog"]),
    getQuestion() {
      return this.conversation[`q${this.step}`][this.$i18n.locale];
    },
    getAnswer() {
      return this.conversation[`a${this.step}`][this.dialog[`q${this.step}`]];
    },
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.conversation = this.empathy
      ? dialog["empathy"]
      : dialog["non-empathy"];
    this.setSection("third.section");
  },
};
</script>
