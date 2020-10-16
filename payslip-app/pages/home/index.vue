<template>
  <v-container>
    <v-row v-for="(payslip, i) in payslips" :key="i">
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col align="right"
            >{{ moment().format("dddd, MMMM Do, YYYY") }}
          </v-col>
        </v-row>

        <h1 class="headline">Welcome!</h1>
        <v-row>
          <v-icon color="pink" size="80"> mdi-account-circle-outline</v-icon>
          <v-spacer />
          <v-col align="right">
            <v-card
              justify="center"
              align="center"
              dark
              max-width="180px"
              max-height="100px"
            >
              <v-card-text>
                <h1 class="subtitle-2">Total Net Earnings</h1>
                <h1 class="title">N{{ payslip.totalNetEarnings }}</h1>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1 class="headline">{{ payslip.name }}</h1>
          </v-col>
        </v-row>
        <br />

        <v-card>
          <v-row class="mx-0 my-0">
            <v-card-title class="title pb-0"> Payslip Summary </v-card-title>
            <v-card-text class="pt-0">As at {{ payslip.month }}</v-card-text>
          </v-row>
          <v-toolbar color="pink" dark>
            <v-toolbar-title class="title"> Profile Data</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row class="mx-4">
              <span>Grade Level</span>
              <v-spacer />
              <span>{{ payslip.gradeLevel }}</span>
            </v-row>
            <v-divider class="my-4" />
            <v-row class="mx-4">
              <span>Step</span>
              <v-spacer />
              <span>{{ payslip.step }}</span>
            </v-row>
            <v-divider class="my-4" />
            <v-row class="mx-4">
              <span>IPPIS No.</span>
              <v-spacer />
              <span>{{ payslip.ippisNo }}</span>
            </v-row>
            <v-divider class="my-4" />
            <v-row class="mx-4">
              <span>Bank Name</span>
              <v-spacer />
              <span>{{ payslip.bankName }}</span>
            </v-row>
            <v-divider class="my-4" />
            <v-row class="mx-4">
              <span>Account No.</span>
              <v-spacer />
              <span>{{ payslip.accountNo }}</span>
            </v-row>
            <v-divider class="my-4" />
            <v-row class="mx-4">
              <span>PFA Name</span>
              <v-spacer />
              <span>{{ payslip.pfaName }}</span>
            </v-row>
            <v-divider class="my-4" />
            <v-row class="mx-4">
              <span>Pension PIN</span>
              <v-spacer />
              <span>{{ payslip.pensionPin }}</span>
            </v-row>
            <v-divider class="my-4" />
          </v-card-text>
        </v-card>
        <br />
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header class="pink--text">{{
              item.earnings
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <span>CONPSS Cons Salary02</span>
                    <v-spacer />
                    <span>N{{ payslip.conpssSalary }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <span>Weighing Shift Allowance</span>
                    <v-spacer />
                    <span>N{{ payslip.weighing }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <strong>Total</strong>
                    <v-spacer />
                    <strong>N{{ payslip.totalGrossEarnings }}</strong>
                  </v-row>
                  <v-divider class="mt-4" />
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <br />
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header class="pink--text">{{
              item.deductions
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <span>CONPSS NHF</span>
                    <v-spacer />
                    <span>N{{ payslip.conpssNhf }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <span>CONPSS Pension</span>
                    <v-spacer />
                    <span>N{{ payslip.conpssPension }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <span>CONPSS Tax</span>
                    <v-spacer />
                    <span>N{{ payslip.conpssTax }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <span>CONPSS Union Dues</span>
                    <v-spacer />
                    <span>{{ payslip.conpssUnionDues }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <span>Coorperative Loan</span>
                    <v-spacer />
                    <span>N{{ payslip.corpLoan }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <span>Coorperative Deductions</span>
                    <v-spacer />
                    <span>N{{ payslip.corpDeductions }}</span>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <strong>Total</strong>
                    <v-spacer />
                    <strong>N{{ payslip.totalGrossDeductions }}</strong>
                  </v-row>
                  <v-divider class="mt-4" />
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <br />
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header class="pink--text">{{
              item.total
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <strong>Total Gross Earnings</strong>
                    <v-spacer />
                    <strong>N{{ payslip.totalGrossEarnings }}</strong>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <strong>Total Gross Deductions</strong>
                    <v-spacer />
                    <strong>N{{ payslip.totalGrossDeductions }}</strong>
                  </v-row>
                  <v-divider class="my-4" />
                  <v-row>
                    <strong>Total Net Earnings</strong>
                    <v-spacer />
                    <strong>N{{ payslip.totalNetEarnings }}</strong>
                  </v-row>
                  <v-divider class="mt-4" />
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <br /><br />
        <nuxt-link to="/home/payslips/">
          <v-row align="center" justify="center">
            <v-btn dark>View Payslip Logs</v-btn>
          </v-row>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
var moment = require("moment");

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { auth } from "~/plugins/firebase";
import { firestore } from "~/plugins/firebase";
export default {
  name: "Payslip-summary",
  head() {
    return {
      title: "Payslip Summary",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Payslip Summary",
        },
      ],
    };
  },
  data() {
    return {
      moment: moment,
      items: [
        {
          earnings: "Gross Earnings",
          deductions: "Gross Deductions",
          total: "Total Net Earnings",
        },
      ],
    };
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
        .limit(2)
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
};
</script>

<style>
</style>