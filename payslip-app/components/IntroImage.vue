<template>
  <div>
    <section class=" hidden-xs-only intro"></section>
    <section class="hidden-sm-and-up intro2"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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

.intro2 {
  background-image: url("~assets/images/payslip-logo.png");
  height: 200px;
  width: 220px;
  position: relative;
  margin-right: 20px;
  box-sizing: border-box;
  background-position: center;
  background-size: contain;
}
</style>