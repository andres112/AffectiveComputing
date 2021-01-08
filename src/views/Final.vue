<template>
  <div>
    <language></language>
    <h1>
      Survey Link
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSetwVGB0qRnDETEqgu1NP-_3BkLsSZLPfq2P7hl3ZFKV0G1xA/viewform"
        target="_blank"
      > link</a>
    </h1>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import { mapMutations } from "vuex";

export default {
  name: "Survey",
  components: { Language },
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
