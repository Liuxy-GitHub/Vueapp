<template>
  <div>
    <div class="pa-breadcrumb">
      <div class="container-fluid">
        <div class="pa-breadcrumb-box">
          <h1>个人信息</h1>
          <ul>
            <li><a href="index.html">主页</a></li>
            <li>个人信息</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- breadcrumb end -->
    <!-- profile start -->
    <div class="pa-profile spacer-top spacer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="pa-profile-box">
              <div class="pa-profile-img">
                <div class="pa-profile-userimg">
                  <img src="../assets/images/user.jpg" alt="image" class="img-fluid" />
                </div>
                <div class="pa-profile-name-box">
                  <h2 class="pa-profile-name">用户名:<span>John Doe</span></h2>
                  <p>添加你的个人描述 </p>
                </div>
              </div>
              <div class="pa-profile-data">
                <ul>
                  <li>
                    <p>电话:</p>
                    <p>{{ $route.query.phone }}</p>
                  </li>
                  <li>
                    <p>电子邮箱 :</p>
                    <p>{{ $route.query.Email }}</p>
                  </li>
                  <li>
                    <p>地区 :</p>
                    <p>{{ $route.query.province }}</p>
                  </li>
                  <li>
                    <p>详细地址 :</p>
                    <p>{{ $route.query.address }}</p>
                  </li>
                  <li><button class="pa-btn" data-toggle="modal" data-target="#exampleModalCenter" @click="gochange">
                      编辑个人信息</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      username: "",
      phone: "",
      Email: "",
      address: "",

    };
  },
  methods: {
    gochange() {
      this.$router.push("/changeprofile")
    }
  }
};
</script>
<style scoped></style>