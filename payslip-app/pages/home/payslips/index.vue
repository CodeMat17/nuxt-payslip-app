<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h1 class="title">Payslip Logs</h1>
        <br />
        <section v-for="(payslip, i) in payslips"
            :key="i">
        <nuxt-link :to="`/home/payslips/${payslip.month}`">
          <v-card
            dark
            color="pink"
            class="mb-6"
           
          >
            <v-card-title>
              {{ payslip.month }}
              <v-spacer />
              <v-icon>mdi-chevron-triple-right</v-icon>
            </v-card-title>
          </v-card>
        </nuxt-link>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { auth } from "~/plugins/firebase";
import { firestore } from "~/plugins/firebase";
export default {
  name: "payslip-logs",
  head() {
    return {
      title: "Payslips Logs",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Payslips Logs",
        },
      ],
    };
  },
  data() {
    return {};
  },
  async asyncData({ app, store, error }) {
    const payslips = [];
    const db = app.$firebase.firestore();
    try {
      const querySnapshot = await db
        .collection("staff")
        .doc(store.state.users.user.uid)
        .collection("payslips")
        .orderBy("date", "desc")
        .get();

      if (querySnapshot.exists) {
        error({ statusCode: 404, message: "Payslip Not Logged For You Yet" });
        return;
      }

      if (querySnapshot.size > 0) {
        for (const doc of querySnapshot.docs) {
          payslips.push({
            id: doc.id,
            ...doc.data(),
          });
        }
      }
      return { payslips };
    } catch (err) {
      error({ statusCode: 404, message: 'Post not found' });
    }
  },
};
</script>

<style>
</style>