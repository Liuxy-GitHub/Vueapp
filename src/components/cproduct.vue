<template>
    <div>
        <div class="col-lg-44">
            <div class="pa-product-sidebar">
                <div class="pa-widget pa-shop-category">
                    <h2 class="pa-sidebar-title">分类</h2>
                    <ul>
                        <li v-for="cate in cproductmes" :key="cate.pid" @click="giveMes(cate)"><a href="javascript:;">{{
                            cate.name
                        }} </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-sm-5">
                            <div class="pa-prod-thumb-img">
                                <img :src="cproduct.imgsrc" alt="image" class="img-fluid a" />
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <div class="pa-prod-content">
                                <h2 class="pa-prod-title">{{ cproduct.name }}</h2>
                                <p class="pa-prod-price"><span>价格： <del>$200</del></span> ${{ cproduct.price }}<span
                                        class="pa-offer-price">25% off</span></p>
                                <a href="#" class="pa-prod-category"><span>分类：</span> {{ cproduct.Categorie }}</a>
                                <p class="pa-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </p>
                                <ul>
                                    <li><span>
                                            <img src="../assets/images/pure.svg" alt="" width="20" />
                                        </span> 100% 纯原料生产</li>
                                    <li><span>
                                            <img src="../assets/images/cash.svg" alt="" width="20" />
                                        </span> 货到付款</li>
                                    <li><span>
                                            <img src="../assets/images/10days.svg" alt="" width="20" />
                                        </span> 7天无理由</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="pa-prod-content">
                                <br><br>
                                <p>{{ cproduct.introduce }}</p>

                            </div>
                        </div>
                    </div>
                    <!-- product start -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['cproductmes'],
    name: "",
    data() {
        return {
            cproduct: {
                imgsrc: require("../assets/images/about.jpg")
            }
        };
    },
    methods: {
        giveMes(cate) {
            this.cproduct = cate
        }
    }
}
</script>
<style scoped></style>