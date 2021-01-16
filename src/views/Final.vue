<template>
  <div>
    <language></language>
    <v-row class="text-center" justify="center">
      <v-col class="my-3" cols="6">
        <h1
          class="mb-6"
          :class="[$vuetify.breakpoint.smAndUp ? 'text-h3' : 'text-h5']"
          v-html="$t('final.title')"
        ></h1>
      </v-col>
      <v-col class="my-2" cols="8">
        <p
          class="font-weight-medium mb-6"
          :class="[$vuetify.breakpoint.smAndUp ? 'title' : 'subtitle-1']"
          v-html="$t('final.description')"
        ></p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSetwVGB0qRnDETEqgu1NP-_3BkLsSZLPfq2P7hl3ZFKV0G1xA/viewform"
          target="_blank"
        >
          <h1>{{$t("final.link")}}</h1>
        </a>
      </v-col>
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
