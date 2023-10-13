<template>
  <div>

    <div class="pa-breadcrumb">
      <div class="container-fluid">
        <div class="pa-breadcrumb-box">
          <h1>购物车</h1>
          <ul>
            <li><a href="index.html">主页</a></li>
            <li>购物车</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- breadcrumb end -->
    <!-- cart start -->
    <div class="pa-cart spacer-top spacer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="pa-cart-box">
              <span>
                <table>
                  <thead>
                    <tr>
                      <th>商品名称</th>
                      <th>商品图片</th>
                      <th>数量</th>
                      <th>库存</th>
                      <th>单价</th>
                      <th>操作</th>
                    </tr> 
                  </thead>
                  <tbody>
                    <tr class="cartitem" v-for="item in $store.state.sort" :key="item.id">
                      <td>{{ item.name }}</td>
                      <td>
                        <div class="pa-cart-img">
                          <img :src="item.imgurl" alt="image" class="img-fluid" />
                        </div>
                      </td>
                      <td>
                        <div class="pa-cart-quantity">
                          <button class="pa-sub" @click="sub(item.id)"></button>
                          <span>{{ item.count }}</span>
                          <button class="pa-add" @click="increa(item.id)"></button>
                        </div>
                      </td>
                      <td>{{ item.stock }}</td>
                      <td class="price">￥{{ item.price }}</td>
                      <td>
                        <a @click="deleteitem(item.id)" class="pa-btn"><span class="color">删除</span></a>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5">总件数</td>
                      <td>{{ $store.getters.unitTotal }}件</td>
                    </tr>
                    <tr>
                      <td colspan="5">总价</td>
                      <td class="total">￥{{ $store.getters.totalPrice }}</td>
                    </tr>

                  </tbody>
                </table>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: "cart",
  data() {
    return {

    };
  },
  methods: {
    ...mapActions(['decrease', 'delete']),
    //同步
    increa(id) {
      this.$store.commit("increase", id)
    },
    //异步
    sub(id) {
      this.decrease(id)
    },
    //异步
    deleteitem(id) {
      this.delete(id)
    }
    // },
  },
  computed: {


  },
};

</script>
<style>
.color {
  color: white
}

.color:hover {
  color: black;
}

.total,
.price {
  color: red;
}
</style>