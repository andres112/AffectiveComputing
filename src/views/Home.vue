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
import { mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    Home,
    Language,
  },
  computed: {
    ...mapState(["test_id"]),
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    if (this.test_id) {
      this.$router.push("/first");
    }
    this.setSection("home.section");
  },
};
</script>
