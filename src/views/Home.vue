<template>
  <div class="home">
    <language></language>
    <home></home>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Language from "@/components/Language.vue";
import { mapMutations } from "vuex";

export default {
  name: "HomeView",
  components: {
    Home,
    Language,
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.setSection("home.section");
  },
};
</script>
