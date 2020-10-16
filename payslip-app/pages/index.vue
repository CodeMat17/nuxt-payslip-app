<template>
  <v-container>
    <v-row>
      <v-col class="skew">
        <v-row justify="center" align="center" class="mt-2 content">
          <v-col justify="center" align="center">
            <IntroImage />
          </v-col>
          <v-col md='6' justify="center" align="center">
            <IntroText />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IntroImage from "@/components/IntroImage";
import IntroText from "@/components/IntroText";
export default {
  name: "Get-Started",
  head() {
    return {
      title: "Get Started",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Get Started",
        },
      ],
    };
  },
  components: {
    IntroImage,
    IntroText,
  },
};
</script>

<style scoped>
.intro {
  background-image: url("~assets/images/payslip-logo.png");
  height: 320px;
  width: 320px;
  position: relative;
  margin-right: 20px;
  box-sizing: border-box;
  background-position: center;
  background-size: contain;
}

.skew {
  transform: skew(0deg, -10deg);
  position: relative;
}

.skew::before {
  content: "";
  position: absolute;
  border-bottom: 100px solid deeppink;
  border-left: 98.8vw solid transparent;
  top: -100px;
}

.skew::after {
  content: "";
  position: absolute;
  border-bottom: 100px solid deeppink;
  border-left: 98.8vw solid transparent;
  bottom: -100px;
  z-index: 1;
}

.content {
  transform: skew(0deg, 10deg);
  position: relative;
}
</style>