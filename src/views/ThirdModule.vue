<template>
  <div>
    <language></language>
    <question></question>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import { mapMutations } from "vuex";
import Question from '../components/Question.vue';

export default {
  name: "Third",
  components: { Language, Question },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.setSection("third.section");
  },
};
</script>
