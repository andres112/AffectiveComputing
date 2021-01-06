<template>
  <v-container fluid>
    <v-row class="d-flex justify-end mb-7">
      <v-col cols="5" sm="3" md="2" :class="$vuetify.breakpoint.xs ? 'top':'fixed'">
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
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Language",
  data: () => ({
    languages: [
      { lan: "English", code: "en" },
      { lan: "Español", code: "es" },
    ],
    select: { lan: "English", code: "en" },
  }),

  created() {
    if (this.select.code != this.$i18n.locale) {
      this.select.code = this.$i18n.locale;
    }
  },

  watch: {
    select: function() {
      this.$i18n.locale = this.select.code;
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
}
.top {
  position: absolute;
}
</style>
