<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h1 class="title">Admin Dashboard</h1>
        <br>
        <h1 class="headline">You are not an admin</h1>
        <p class="good-bye">Good bye!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from "~/plugins/firebase";
export default {
  name: "Admin",
  head() {
    return {
      title: "Admin",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Admin",
        },
      ],
    };
  },
  // async asyncData({ app, error }) {
  //   const payslips = [];
  //   const db = app.$firebase.firestore();

  //   try {
  //     const querySnapshot = await db
  //       .collection("payslips")
  //       .doc("98MZ9O2UTedlJ793ue7977bqJ8D2")
  //       .collection("sept")
  //       .get();

  //     if (!querySnapshot == null) {
  //       error({ statusCode: 404, message: "Payslip not found" });
  //       return;
  //     }

  //     if (querySnapshot.size > 0) {
  //       for (const doc of querySnapshot.docs) {
  //         payslips.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       }
  //     }
  //     return { payslips };
  //   } catch (error) {
  //     error({ statusCode: 404, message: "Payslip not found" });
  //   }
  // },
  data() {
    return {
      payslip: {
        month: "September, 2020",
        asAt: "September, 2020",
        gradeLevel: 14,
        step: 6,
        ippisNo: 456876,
        bankName: "Access Bank",
        accountNo: 909876234,
        pfaName: "Stanbic IBTC",
        pensionPin: "PEN234509876123",
        conpssSalary: 80000,
        weighing: 6500,
        totalEarnings: 97000,
        conpssNhf: 3456,
        conpssPension: 3456,
        conpssTax: 3456,
        conpssUnionDues: 3456,
        corpLoan: 78854,
        corpDeductions: 10000,
        totalDeductions: 30000,
        totalGrossEarnings: 190000,
        totalGrossDeductions: 190000,
        totalNetEarnings: 190000,
      },
    };
  },
  mounted() {},
  methods: {
    submit() {
      
      firebase
        .firestore()
        .collection("staff")
        .doc(firebase.auth().currentUser.uid)
        .collection("payslip")
        .add({
          month: this.payslip.month,
          totalEarnings: this.payslip.totalEarnings,
          createdAt: new Date(),
          isCompleted: false,
        });
    },
    
  },
};
</script>

<style scoped>
.good-bye {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  /* color: #6e6e6e; */
  color: deeppink;
}
</style>