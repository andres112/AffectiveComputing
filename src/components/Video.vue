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
          <source src="/video/clip.mp4" type="video/mp4" />

          Sorry, your browser doesn't support embedded videos.
        </video>
      </v-col>
      <transition name="scale-transition">
        <v-col cols="8" class="mt-6" v-if="isFinished">
          <p
            class=" font-weight-medium"
            :class="[$vuetify.breakpoint.smAndUp ? 'title' : 'subtitle-1']"
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
      </transition>
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
  components: {
    Language,
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
