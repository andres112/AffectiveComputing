<template>
  <div>
    <language></language>
    <v-row class="text-center" justify="center">
      <v-col class="my-3" cols="6">
        <h1
          class="mb-6"
          :class="[$vuetify.breakpoint.smAndUp ? 'text-h3' : 'text-h5']"
          v-html="$t('end.title')"
        ></h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import { mapMutations } from "vuex";

import {getReport} from '@/assets/helpers.js'

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
    getReport();
  },
};
</script>
