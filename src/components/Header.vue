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
          <div class="text-right" v-show="test_id">
            <div class="font-weight-black" :class="$vuetify.breakpoint.xs ? 'subtitle-1':'title'">Test id: {{test_id}}</div>
          </div>
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
  }),

  computed: {
    ...mapState(["section", "test_id"]),
  },

  watch: {
    themeStyle: function() {
      this.$vuetify.theme.dark = this.themeStyle;
    },

  },
};
</script>
