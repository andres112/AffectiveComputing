<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="my-1" cols="6">
        <p class="subtitle-1 font-weight-medium" v-html="$t('home.advice')"></p>
      </v-col>
      <v-col class="my-1" cols="6">
        YES NO ANSWERS
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Question",

  data: () => ({}),
};
</script>
