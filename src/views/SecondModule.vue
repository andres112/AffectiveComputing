<template>
  <div>
    <videoclip></videoclip>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import { mapMutations } from "vuex";
import Videoclip from '../components/Video.vue';

export default {
  name: "First",
  components: { Language, Videoclip},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.setSection("second.section");
  },
};
</script>
