<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="my-1" cols="6" align-self="center">
        <h1 class="mb-6">{{ $t("first.title") }}</h1>
        <v-form lazy-validation>
          <v-select
            v-model="gender"
            :items="genders"
            :item-text = "$i18n.locale"
            item-value = "code"
            :rules="[(v) => !!v || 'Gender is required']"
            :label="$t('first.gender')"
            required
          ></v-select>
          
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Demographics",
  data() {
    return {
      gender: null,
      genders: [
        { en: "Male", es: "Hombre", code: "m" },
        { en: "Female", es: "Mujer", code: "f" },
        { en: "Other", es: "Otro", code: "o" },
        { en: "Prefer not say", es: "Prefiero no decir", code: "p" },
      ],
    };
  },
};
</script>
