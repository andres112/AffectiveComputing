<template>
  <v-app>
    <header-bar></header-bar>
    <v-main>
      <!-- <v-container fluid>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/first">First Module</router-link>
        </div>
        <router-view></router-view>
      </v-container> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from '@/components/Header.vue'

export default {
  name: "App",
  components:{
    HeaderBar,
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,600;0,700;1,300&display=swap');

// Font Variables
$nunito: "Nunito", sans-serif;

* {
  font-family: $nunito;
}
</style>
