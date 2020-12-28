<template>
  <div>
    <h1>First Module</h1>
  </div>
</template>

<script>
import {mapMutations } from "vuex";

export default {
  name: "First",
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations(["setSection"]),
  },
  created() {
    this.setSection("first.section")
  },
};
</script>
