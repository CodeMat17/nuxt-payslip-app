<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <section v-for="(payslip, i) in payslips" :key="i">
          <v-row class="px-4">
            <v-spacer />
            <nuxt-link to="/home/payslips">
              <v-icon color="pink">mdi-chevron-triple-left</v-icon>
            </nuxt-link>
          </v-row>
          <v-alert
            v-if="downloadOption"
            type="info"
            elevation="5"
            border="left"
            dismissible
            color="pink"
            colored-border
            >Download option coming soon.
          </v-alert>
          <br />
          <v-card>
            <v-card-title class="mb-0">
              {{ payslip.name }}
              <v-spacer />
              <a :href="payslip.myPayslip" :download="payslip.myPayslipMonth">
                <v-icon color="primary">mdi-file-download-outline</v-icon>
              </a>
            </v-card-title>
            <v-card-text class="my-0">{{ payslip.month }}</v-card-text>
            <v-toolbar color="pink" dark>
              <v-toolbar-title class="title">Gross Earnings</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row class="mx-0">
                <span>CONPSS Cons Salary02</span>
                <v-spacer />
                <span>N{{ payslip.conpssSalary }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <span>Weighing Shift Allowance</span>
                <v-spacer />
                <span>N{{ payslip.weighing }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <strong>Total</strong>
                <v-spacer />
                <strong>N{{ payslip.totalGrossEarnings }}</strong>
              </v-row>
              <v-divider class="mt-4" />
            </v-card-text>
            <v-toolbar color="pink" dark>
              <v-toolbar-title class="title">Gross Deductions</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row class="mx-0">
                <span>CONPSS NHF</span>
                <v-spacer />
                <span>N{{ payslip.conpssNhf }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <span>CONPSS Pension</span>
                <v-spacer />
                <span>N{{ payslip.conpssPension }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <span>CONPSS Tax</span>
                <v-spacer />
                <span>N{{ payslip.conpssTax }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <span>CONPSS Union Dues</span>
                <v-spacer />
                <span>{{ payslip.conpssUnionDues }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <span>Coorperative Loan</span>
                <v-spacer />
                <span>N{{ payslip.corpLoan }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <span>Coorperative Deductions</span>
                <v-spacer />
                <span>N{{ payslip.corpDeductions }}</span>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <strong>Total</strong>
                <v-spacer />
                <strong>N{{ payslip.totalGrossDeductions }}</strong>
              </v-row>
              <v-divider class="mt-4" />
            </v-card-text>
            <v-toolbar color="pink" dark>
              <v-toolbar-title class="title"
                >Total Net Earnings</v-toolbar-title
              >
            </v-toolbar>
            <v-card-text>
              <v-row class="mx-0">
                <strong>Total Gross Earnings</strong>
                <v-spacer />
                <strong>N{{ payslip.totalGrossEarnings }}</strong>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <strong>Total Gross Deductions</strong>
                <v-spacer />
                <strong>N{{ payslip.totalGrossDeductions }}</strong>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="mx-0">
                <strong>Total Net Earnings</strong>
                <v-spacer />
                <strong>N{{ payslip.totalNetEarnings }}</strong>
              </v-row>
              <v-divider class="mt-4" />
            </v-card-text>
          </v-card>
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
  name: "my-payslip",
  head() {
    return {
      title: "My Payslip",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Payslips Summary",
        },
      ],
    };
  },
  data() {
    return {
      payslips: [],
      payslip: {},
      downloadOption: false,
    };
  },
  async asyncData({ app, store, error, route }) {
    console.log(route);

    const payslips = [];
    const db = app.$firebase.firestore();
    try {
      const querySnapshot = await db
        .collection("staff")
        .doc(store.state.users.user.uid)
        .collection("payslips")
        .where("month", "==", route.params.id)
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
      error({ statusCode: 404, message: "Post not found" });
    }
  },
  methods: {
    async getPayslip() {
      this.downloadOption = true;
      setTimeout(() => {
        this.downloadOption = false;
      }, 3000);
      //      await this.$axios.get('https://firebasestorage.googleapis.com/v0/b/nuxt-auth-b84d5.appspot.com/o/pix.PNG?alt=media&token=c2c627c3-3ba8-4d8d-8dcf-f2f34c6227c4')
      //       .then((response) => {
      //      var fileURL = window.URL.createObjectURL(new Blob([response.data]));
      //      var fileLink = document.createElement('a');

      //      fileLink.href = fileURL;
      //      fileLink.setAttribute('download', 'file.png');
      //      document.body.appendChild(fileLink);

      //      fileLink.click();
      // });
    },
  },
};
</script>

<style>
</style>