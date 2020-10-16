<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-card class="mt-8">
          <v-toolbar color="pink" dark>
            <v-toolbar-title class="title"> Sign in </v-toolbar-title>
          </v-toolbar>
        </v-card>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Email </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0">
                        Enter your email account
                      </span>
                      <span v-else key="1">
                        {{ account.email }}
                      </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                v-model="account.email"
                type="email"
                placeholder="obi-abdul@gmail.com"
                :rules="emailRules"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Password </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0">
                        Enter your password here
                      </span>
                      <span v-else key="1"> Secret </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                v-model="account.password"
                type="password"
                placeholder="Your secret"
                :rules="passwordRules"
              >
              </v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card flat class="my-4">
          <v-card-actions>
            <v-spacer />
            <v-btn v-if="isLoading" dark color="pink" elevation="12"
              >loading...</v-btn
            >
            <v-btn v-else dark color="pink" @click="login">Sign in</v-btn>
          </v-card-actions>
          <br />
          <v-alert
            v-if="isError"
            type="error"
            elevation="5"
            border="left"
            dismissible
            >{{ errMsg }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signin",
  head() {
    return {
      title: "Signin",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Signin",
        },
      ],
    };
  },
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "Please enter a valid e-mail",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must not be less than 6 characters",
      ],
      isError: false,
      errMsg: "",
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      this.$store
        .dispatch("users/login", this.account)
        .then(() => {
          this.account.email = "";
          this.account.password = "";
          this.isLoading = false;
          this.$router.push("/home");
        })
        .catch((error) => {
          this.isLoading = false;
          this.isError = true;
          this.errMsg = error.message;
          setTimeout(() => {
            this.isError = false;
          }, 6000);
        });
    },
  },
};
</script>

<style>
</style>