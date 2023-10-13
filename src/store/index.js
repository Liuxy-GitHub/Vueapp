import { addLocale } from 'core-js'
import { createStore } from 'vuex'

export default createStore({
  state: {
    sort: [
      {
        id: 1,
        name: "绿茶",
        price: 1000,
        count: 1,
        stock: 3,
        imgurl: require("../assets/images/product1.png")
      },
      {
        id: 2,
        name: "黑茶",
        price: 1050,
        count: 1,
        stock: 4,
        imgurl: require("../assets/images/product2.png")
      },
      {
        id: 3,
        name: "白茶",
        price: 2000,
        count: 1,
        stock: 5,
        imgurl: require("../assets/images/product3.png")
      },
      {
        id: 4,
        name: "红茶",
        price: 1050,
        count: 1,
        stock: 6,
        imgurl: require("../assets/images/product4.png")
      },
    ],
    mainProduct: [{
      id: 1,
      name: "红茶"
    },
    {
      id: 2,
      name: "绿茶",
    },
    {
      id: 3,
      name: "黑茶",
    },
    {
      id: 4,
      name: "白茶",
    },
    {
      id: 5,
      name: "乌龙茶",
    },
    ],
    laws: [
      {
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
      },
    ]
  },

  mutations: {
    //增加商品
    increase(state, id) {
      let index = state.sort.findIndex(function (item) {
        return item.id == id
      })
      if (state.sort[index].stock > 0) {
        state.sort[index].stock--
        state.sort[index].count++
      }
      if (state.sort[index].stock == 0) {
        setTimeout(() => {
          alert("此商品已达到最大库存")
        }, 300);

      }
    },
    //减少商品
    decrease2(state, id) {
      let index = state.sort.findIndex(function (item) {
        return item.id == id
      })
      if (state.sort[index].count > 0) {
        state.sort[index].stock++
        state.sort[index].count--
      }
    },
    //删除商品
    deleteitem(state, id) {
      let index = state.sort.findIndex(function (item) {
        return item.id == id
      })
      state.sort.splice(index, 1)
    }
  },
  actions: {
    decrease(context, id) {
      setTimeout(() => {
        context.commit('decrease2', id)
      }, 500);
    },
    delete(context, id) {
      setTimeout(() => {
        context.commit('deleteitem', id)
      }, 500);
    }
  },
  modules: {
  },
  getters: {
    //单价
    unitTotal(state) {
      return state.sort.reduce(function (sum, item) {
        return sum += item.count
      }, 0)
    },
    //总价
    totalPrice(state) {
      return state.sort.reduce(function (total, item) {
        return total += item.price * item.count
      }, 0)
    },
  },
})
