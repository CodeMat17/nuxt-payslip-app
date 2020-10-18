<template>
  <div justtify="center" align="center">
    <p class="intro-title">
      Your payslips
    </p>
     <h1 class="intro-title">
      <strong>ANYTIME, ANYDAY</strong>
    </h1>
    <br>
    <v-alert dense elevation="4" border="left">
      <h1 class="subtitle-2">
        NB: Plese be notified that this service is for the staff
      </h1>
      <h1 class="subtitle-2">of the National Film and Video Censors Board ONLY</h1>
    
    </v-alert>
    <br>
    <nuxt-link to="/signin">
      <v-btn color="pink" dark>
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
  /* font-family: "Arizonia", cursive; */
  font-size: 25px;
  /* color: #6e6e6e; */
  color: deeppink;
  margin-left: 20px;
}
</style>