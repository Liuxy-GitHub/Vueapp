<template>
    <div>
        <div class="pa-widget pa-tag">
            <h2 class="pa-sidebar-title">分类标签</h2>
            <ul>
                <li><a href="javascript:;" v-for="item in sProduct" :key="item.pid" style="margin-bottom: 10px;"
                        @click="goshop(item)">{{ item.scm }}</a></li>
            </ul>
        </div>
    </div>
    <!-- product end-->
</template>
<script>
export default {
    name: "shop",
    data() {
        return {
            sProduct: [{
                pid: 1,
                pname: "绿茶",
                psrc: require("../assets/images/product1.png"),
                scm: "珍品"
            },
            {
                pid: 2,
                pname: "红茶",
                psrc: require("../assets/images/product2.png"),
                scm: "珍藏"
            },
            {
                pid: 3,
                pname: "黑茶",
                psrc: require("../assets/images/product3.png"),
                scm: "养生"

            },
            {
                pid: 4,
                pname: "乌龙茶",
                psrc: require("../assets/images/product4.png"),
                scm: "药用"

            },
            {
                pid: 5,
                pname: "白茶",
                psrc: require("../assets/images/product4.png"),
                scm: "藏品"

            },]
        };
    },
    methods: {
        goshop(item) {
            this.$emit("cshop", item)
        }
    }
}
</script>
<style scoped></style>