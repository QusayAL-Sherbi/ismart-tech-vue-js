<template lang="pug">
// Start Features Section
section.main-section.features
  .container-fluid
    h2.h1.section-title Features
    .row
      .col-md-2.offset-md-1.col-sm-6
        .feat-box
          img(src="../assets/icons/secure-payment.svg" alt="")
          h6 Secure Payment
      .col-md-2.col-sm-6
        .feat-box
          img(src="../assets/icons/free-shipping.svg" alt="")
          h6 Free Shipping
      .col-md-2.col-sm-6
        .feat-box
          img(src="../assets/icons/customer-service.svg" alt="")
          h6 Customer Service
      .col-md-2.col-sm-6
        .feat-box
          img(src="../assets/icons/multi-langs.svg" alt="")
          h6 Multi Languages
      .col-md-2.col-sm-6
        .feat-box
          img(src="../assets/icons/track-order.svg" alt="")
          h6 Track Order
// End Features Section
</template>

<script>
export default {
  name: "FeaturesSection",
};
</script>

<style lang="scss">
.features {
  .feat-box {
    padding: 10px;
    margin: 0 auto;
    border-radius: 4px;
    text-align: center;
    img {
      margin: 0 auto 10px auto;
      display: block;
      width: 80px;
      height: 80px;
    }
    .feat-title {
      margin: 10px 0 0 0;
      font-size: 1.2em;
    }
  }
}
</style>
