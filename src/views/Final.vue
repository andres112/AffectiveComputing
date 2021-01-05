<template>
  <div>
    <language></language>
    <h1>Survey Link</h1>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import { mapMutations } from "vuex";

export default {
  name: "Survey",
  components: { Language},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.setSection("final.section");
  },
};
</script>
