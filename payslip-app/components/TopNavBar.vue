<template>
  <v-container class="mb-6">
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-app-bar dark fixed>
          <v-toolbar-title>
            <v-img :src="require('@/assets/images/icon.png')" height="50px" width="45px"></v-img>
          </v-toolbar-title>
          <v-spacer />
          <v-toolbar-items
            v-if="$store.state.users.user"
            class="hidden-xs-only">
            <nuxt-link to="/home">
              <v-container>
                <v-btn>Home</v-btn>
              </v-container>
            </nuxt-link>
            <nuxt-link to="/home/admin">
              <v-container>
                <v-btn>Admin</v-btn>
              </v-container>
            </nuxt-link>
          </v-toolbar-items>
          <!-- <v-spacer /> -->
          <v-app-bar-nav-icon
            color="pink"
            v-if="$store.state.users.user"
            v-model="drawer"
            @click.stop="drawer = !drawer"
            class="hidden-sm-and-up"
          />
          <v-toolbar-items
            v-if="$store.state.users.user"
            class="hidden-xs-only"
          >
            <v-container @click="signOut">
              <v-btn>Logout</v-btn>
            </v-container>
          </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed temporary right dark>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <br />
          <br /><br /><br />
          <div class="mx-4">
            <v-btn @click="signOut" color="pink" block>Logout</v-btn>
          </div>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "~/plugins/firebase";
import Cookie from "js-cookie";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Home",
          to: "/home",
        },
        {
          title: "Admin",
          to: "/home/admin",
        },
      ],
    };
  },
  methods: {
    async signOut() {
      await auth.signOut();
      await Cookie.remove("access_token");
      location.href = "/signin";
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style>
</style>