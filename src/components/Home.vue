<template>
  <!-- banner start -->
  <div class="pa-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-6">
          <div class="pa-banner-text">
            <h4 class="pa-banner-category">Aloevera Cream</h4>
            <h2>毋庸置疑的是，这是个很好的机会，因为它可以让我们的生活更加美好。</h2>
            <a href="javascript:;" class="pa-view-all">浏览全部</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- banner end -->
  <!-- top medicine start -->
  <div class="pa-medicine spacer-top spacer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="col6 in off6">
          <div class=" pa-medicine-box">
            <img :src="col6.src" alt="image" class="img-fluid" />
            <h2><a href="#">{{ col6.name }}</a></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pa-counter spacer-top spacer-bottom">
    <div class="container">
      <div class="pa-heading">
        <img src="../assets/images/herbal.svg" alt="image" class="img-fluid" />
        <h1>我们的发展情况</h1>
      </div>
      <div class="pa-counter-main" id="counter">
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="col3 in sm6">
            <div class="pa-counter-box">
              <img :src="col3.src" alt="" class="img-fluid">
              <h1 class="counter-value" data-count="25">{{ col3.count }}</h1>
              <p>{{ col3.explain }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- counter end -->
  <!-- trending product start -->

  <!-- footer start -->

  <!-- footer end -->
  <!-- copyright start -->

  <!-- copyright end -->
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      off6: [{
        id: 1,
        src: require("../assets/images/top1.jpg"),
        name: "草药"
      },
      {
        id: 2,
        src: require("../assets/images/top2.jpg"),
        name: "新鲜的产品"
      },
      {
        id: 3,
        src: require("../assets/images/top3.jpg"),
        name: "全面关怀"
      }],
      sm6: [{
        id: 1,
        src: require("../assets/images/workexperience.svg"),
        explain: "从业经验",
        count: "25k+"
      },
      {
        id: 2,
        src: require("../assets/images/customer.svg"),
        explain: "稳定的客户",
        count: "50k+"

      },
      {
        id: 3,
        src: require("../assets/images/chanpin.svg"),
        explain: "产品",
        count: "800k+"

      },
      {
        id: 4,
        src: require("../assets/images/chanpinchundu.svg"),
        explain: "产品",
        count: "100%"

      },],

      law: [{
        id: "a",
        n: "隐私条款"
      },
      {
        id: "b",
        n: "客户服务"
      },
      {
        id: "c",
        n: "退货政策"
      },]

    };
  },
};
</script>
<style scoped></style>
