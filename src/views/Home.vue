<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import {mapMutations } from "vuex";
export default {
  name: "HomeView",
  components: {
    Home,
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.setSection("home.section")
  },
};
</script>
