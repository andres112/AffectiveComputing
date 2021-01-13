<template>
  <div>
    <language></language>
    <demographics link_name="second"></demographics>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import Demographics from "@/components/Demographics.vue";
import { mapMutations } from "vuex";

export default {
  name: "First",
  components: { Language, Demographics },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.setSection("first.section");
  },
};
</script>
