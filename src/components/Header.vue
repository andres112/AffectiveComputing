<template>
  <v-app-bar app color="primary" dark>
    <v-container fluid>
      <v-row class="d-flex justify-space-between align-center">
        <v-col cols="6">
          <div class="d-flex align-center">
            <div class="text-h5 font-weight-black" v-text="$t(section)"></div>
          </div>
        </v-col>

        <v-col cols="4">
          <v-select
            v-model="select"
            :items="languages"
            item-text="lan"
            item-value="code"
            prepend-icon="mdi-translate"
            return-object
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-switch color="grey darken-4" v-model="themeStyle"></v-switch> -->
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data: () => ({
    themeStyle: true,
    text: "Home",
    languages: [
      { lan: "English", code: "en" },
      { lan: "Español", code: "es" },
    ],
    select: { lan: "English", code: "en" },
  }),

  computed: {
    ...mapState(["section"]),
  },

  watch: {
    themeStyle: function() {
      this.$vuetify.theme.dark = this.themeStyle;
    },
    select: function() {
      this.$i18n.locale = this.select.code;
    },
  },
};
</script>
