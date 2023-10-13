<template>
    <div>
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
                                    <h2 class="pa-profile-name">用户名:<span>John Doe</span>
                                    </h2>

                                </div>
                            </div>
                            <div class="pa-profile-data">
                                <ul>
                                    <li>
                                        <p>电话:</p>
                                        <p><input type="number" v-model="phone" /></p>
                                    </li>
                                    <li>
                                        <p>电子邮箱 :</p>
                                        <p><input type="text" v-model="Email" /></p>
                                    </li>
                                    <li>
                                        <p>地区 :</p>
                                        <p><input type="text" v-model="province" /></p>
                                    </li>
                                    <li>
                                        <p>详细地址 :</p>
                                        <p><input type="text" v-model="address" /></p>
                                    </li>
                                </ul>

                            </div>
                            <button class="pa-btn" @click='saveChange'>提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "changeprofile",
    data() {
        return {
            phone: "",
            Email: "",
            province: "",
            address: ""
        };
    },
    methods: {
        saveChange() {
            this.$router.push(
                {
                    path: '/profile',
                    query: {
                        phone: this.phone,
                        Email: this.Email,
                        province: this.province,
                        address: this.address,
                    }
                })
        }
    }
}
</script>
<style scoped></style>