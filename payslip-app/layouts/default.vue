<template>
  <v-app>
    <v-main>
      <TopNavBar />
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import TopNavBar from "@/components/TopNavBar";
export default {
  components: {
    TopNavBar,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
