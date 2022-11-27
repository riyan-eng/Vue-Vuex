import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  getters: {
    saleProduct: (state) => {
      var saleProduct = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProduct;
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach((product) => {
        product.price -= payload;
      });
    },
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function(){
        context.commit('reducePrice', payload)
      }, 2000)
    }
  },
  modules: {},
});
