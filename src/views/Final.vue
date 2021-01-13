<template>
  <div>
    <language></language>
    <v-row class="text-center" justify="center">
      <h1>
        Survey Link
      </h1>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSetwVGB0qRnDETEqgu1NP-_3BkLsSZLPfq2P7hl3ZFKV0G1xA/viewform"
        target="_blank"
      >
        link
      </a>
      <v-col class="my-1" cols="6"> </v-col
    ></v-row>
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
