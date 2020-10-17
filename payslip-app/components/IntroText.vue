<template>
  <div justtify="center" align="center">
    <h1 class="intro-title">
      Your payslips - <strong>ANYTIME, ANYDAY</strong>
    </h1>
    <br />
    <v-alert elevation="4" border="left">
      <h1 class="subtitle-2">
        NB: Plese be notified that this service is for the staff
      </h1>
      <h1 class="subtitle-2">of the National Film and Video Censors Board</h1>
      <h1 class="subtitle-2">ONLY.</h1>
    </v-alert>
    <nuxt-link to="/signin">
      <v-btn block outlined color="pink" dark class="mt-1">
        get started
        <v-icon class="ml-4"> mdi-account-key-outline </v-icon>
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.intro-title {
  font-family: "Arizonia", cursive;
  font-size: 30px;
  /* color: #6e6e6e; */
  color: deeppink;
  margin-left: 20px;
}
</style>