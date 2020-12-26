<template>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="text-h5 font-weight-black" v-text="text"></div>
      </div>

      <v-spacer></v-spacer>

      <v-switch
        color="grey darken-4"
        v-model="themeStyle"
      ></v-switch>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    data: () => ({
    themeStyle: true,
    text: "Home",
  }),

  watch: {
    themeStyle: function() {
      this.$vuetify.theme.dark = this.themeStyle;
    },
  },
}
</script>