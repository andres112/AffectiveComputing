<template>
  <v-container>
    <language v-if="isFinished"></language>
    <v-row class="mt-10 text-center" justify="center">
      <v-col class="my-1 d-flex justify-center" cols="12" v-if="!isFinished">
        <video
          controls
          width="100%"
          autoplay
          preload="auto"
          @ended="finished()"
          ref="videoclip"
        >
          <source
            src="https://i.rmbl.ws/s8/2/L/g/e/q/Lgeqb.caa.1.mp4"
            type="video/mp4"
          />

          Sorry, your browser doesn't support embedded videos.
        </video>
      </v-col>
      <v-col cols="12" class="mt-5" v-if="isFinished">
        <p
          class=" font-weight-medium"
          :class="[$vuetify.breakpoint.sm ? 'subtitle-1' : 'subtitle-2']"
        >
          {{ $t("home.presentation") }}
        </p>
        <v-btn
          color="red"
          class="my-2 white--text"
          large
          type="submit"
          @click.prevent="next"
        >
          {{ $t("second.next_button") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Language from "./Language.vue";
export default {
  name: "Video",
  data() {
    return {
      isFinished: false,
    };
  },
  components:{
    Language
  },
  methods: {
    next() {
      this.$router.push("/third");
    },
    finished: function() {
      this.isFinished = true;
    },
  },
};
</script>
