<template>
  <div>
    <div>
      <div class="pa-main-wrapper">
        <!-- main header start -->
        <div class="pa-main-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3 col-6">
                <div class="pa-logo">
                  <a href="index.html"><img src="../src/assets/images/logo.svg" alt="image" class="img-fluid" /></a>
                </div>
              </div>
              <div class="col-md-9 col-6">
                <div class="pa-nav-bar">
                  <div class="pa-menu">
                    <ul class="router-link">
                      <router-link to="/home">主页</router-link> &nbsp;&nbsp;
                      <router-link to="/shop">商店</router-link> &nbsp;&nbsp;
                      <router-link to="/cart">购物车1</router-link> &nbsp;&nbsp;
                      <router-link to="/profile">个人信息</router-link>&nbsp;&nbsp;
                      <router-link to="/product">产品详情</router-link>&nbsp;&nbsp;
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <div class="pa-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="pa-foot-box">
                <h2 class="pa-foot-title">主流产品</h2>
                <ul>
                  <li v-for="item in $store.state.mainProduct" :key="item.id">
                    <a href="javascript:;">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="pa-foot-box">
                <h2 class="pa-foot-title">法律信息</h2>
                <ul>
                  <li v-for=" item  in  $store.state.laws " :key="item.id">
                    <a href="javascript:;">{{ item.n }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer end -->
    <!-- copyright start -->
    <div class="pa-copyright">
      <div class="container">
        <p>Copyright &copy; 2022 BRANDTEASELLINGSYSTEM保留所有的权利。</p>
      </div>
    </div>
    <!-- footer end -->

  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  components: {}
}
</script>
<style>
@import url(../src/assets/css/bootstrap.min.css);
@import url(../src/assets/css/all.min.css);
@import url(../src/assets/css/font.css);
@import url(../src/assets/css/swiper.min.css);
@import url(../src/assets/css/style.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

a {
  font-weight: bold;
  /* color: white; */

}

a.router-link-exact-active {
  color: blueviolet;
}

#nav {
  position: relative;
  top: 50px;
}

* {
  margin: 0px;
  padding: 0px;
}
</style>
