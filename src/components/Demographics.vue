<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="my-1" cols="6">
        <h1
          class="mb-6"
          :class="[$vuetify.breakpoint.smAndUp ? 'text-h3' : 'text-h5']"
        >
          {{ $t("first.title") }}
        </h1>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="validate"
          @change="userChange"
        >
          <v-select
            v-model="userData.gender"
            :items="genders"
            :item-text="$i18n.locale"
            item-value="code"
            :rules="[(v) => !!v || $t('first.error_required')]"
            :label="$t('first.gender')"
            required
          ></v-select>
          <br />
          <v-slider
            v-model="userData.age"
            :label="$t('first.age')"
            thumb-color="primary"
            thumb-label="always"
            max="100"
            min="10"
          ></v-slider>
          <v-row class="d-flex justify-space-between align-center">
            <v-col cols="6" class="text-left">
              {{ $t("first.emotion") }}
            </v-col>
            <v-col cols="5" class="text-left">
              <v-radio-group
                v-model="userData.emotion"
                required
                :rules="[(v) => !!v || $t('first.error_required')]"
              >
                <v-radio
                  v-for="n in emotions"
                  :key="n.code"
                  :label="n[$i18n.locale]"
                  :value="n.code"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-space-between align-center">
            <v-col cols="6" class="text-left">
              {{ $t("first.personality") }}
            </v-col>
            <v-col cols="5" class="text-left">
              <v-radio-group
                v-model="userData.personality"
                required
                :rules="[(v) => !!v || $t('first.error_required')]"
              >
                <v-radio
                  v-for="n in personalities"
                  :key="n.code"
                  :label="n[$i18n.locale]"
                  :value="n.code"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-space-between align-center">
            <v-col cols="6" class="text-left">
              {{ $t("first.valence") }}
            </v-col>
            <v-col cols="5" class="text-left">
              <v-radio-group
                v-model="userData.valence"
                required
                :rules="[(v) => !!v || $t('first.error_required')]"
              >
                <v-radio
                  v-for="n in valences"
                  :key="n.code"
                  :label="n[$i18n.locale]"
                  :value="n.code"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-space-between align-center">
            <v-col cols="6" class="text-left">
              {{ $t("first.day") }}
            </v-col>
            <v-col cols="5" class="text-left">
              <v-radio-group
                v-model="userData.day_mood"
                required
                :rules="[(v) => !!v || $t('first.error_required')]"
              >
                <v-radio
                  v-for="n in day_moods"
                  :key="n.code"
                  :label="n[$i18n.locale]"
                  :value="n.code"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-btn
              color="red"
              class="my-2 white--text"
              x-large
              type="submit"
              :disabled="!valid"
            >
              {{ $t("first.submmit_button") }}
            </v-btn>
          </v-col>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Demographics",
  data() {
    return {
      valid: true,
      userData: {
        gender: null,
        age: 30,
        personality: null,
        emotion: null,
        valence: null,
        day_mood: null,
      },
      genders: [
        { en: "Male", es: "Hombre", code: "m" },
        { en: "Female", es: "Mujer", code: "f" },
        { en: "Other", es: "Otro", code: "o" },
        { en: "Prefer not say", es: "Prefiero no decir", code: "na" },
      ],

      personalities: [
        { en: "Introvert", es: "Introvertido", code: "in" },
        { en: "Extrovert", es: "Extrovertido", code: "ex" },
        { en: "Ambivert", es: "Ambivertido", code: "am" },
      ],

      emotions: [
        { en: "Happiness", es: "Felicidad", code: "happy" },
        { en: "Sadness", es: "Tristeza", code: "sadness" },
        { en: "Disgust", es: "Disgusto", code: "disgust" },
        { en: "Fear", es: "Miedo", code: "fear" },
        { en: "Surprise", es: "Sorpresa", code: "surprise" },
        { en: "Anger", es: "Ira", code: "anger" },
      ],

      valences: [
        { en: "Positive", es: "Positivo", code: "pos" },
        { en: "Negative", es: "Negativo", code: "neg" },
        { en: "Neutral", es: "Neutro", code: "none" },
      ],

      day_moods: [
        { en: "Excellent", es: "Excelente", code: "exc" },
        { en: "Good", es: "Bien", code: "goo" },
        { en: "Normal", es: "Normal", code: "nor" },
        { en: "Bad", es: "Mal", code: "bad" },
        { en: "Very Bad", es: "Muy mal", code: "vbad" },
      ],
    };
  },
  props: {
    link_name: String,
  },
  methods: {
    ...mapActions(["updateTest"]),
    ...mapMutations(["setUser"]),
    async validate() {
      this.valid = this.$refs.form.validate();
      if (this.valid) {
        const payload = {
          id: this.test_id,
          content: {
            user: this.userData,
          },
        };
        try {
          await this.updateTest(payload);
          this.$router.push(`/${this.link_name}`);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  computed: {
    ...mapState(["test_id", "user"]),
    userChange() {
      this.setUser(this.userData);
      return true;
    },
  },
  created() {
    this.userData = this.user;
  },
};
</script>
