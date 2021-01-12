export const state = () => ({
  products: null,
})

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
}

export const actions = () => ({
  // async getProduct(_, productId) {
  //   return await API.graphql(
  //     graphqlOperation(getProductQuery, {
  //       id: productId,
  //     })
  //   )
  // },
})

export const getters = () => ({})
