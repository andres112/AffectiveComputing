<template>
  <div>
    <language></language>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import { mapMutations } from "vuex";

export default {
  name: "Third",
  components: { Language },
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
