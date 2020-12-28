<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="mt-10 mb-2" cols="6" align-self="center">
        <h1 class="display-3 font-weight-bold mb-3 ">
          {{$t('home.title')}}
        </h1>
        <p class="title font-weight-medium">
          {{$t('home.presentation')}}
          <br />
          <br />
          {{$t('home.advice')}}          
        </p>
      </v-col>
      <v-col cols="12">
        <v-btn color="red" class="my-2 white--text" x-large @click="start">
          {{$t('home.start-button')}}
          <v-icon dark x-large>
            mdi-play-circle-outline
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
  }),

  methods: {
    start(){
      this.$router.push("/first")
    }
  },
};
</script>
