export const state = () => ({
  cartItemCount: 0,
  cartItems: null,
})

export const mutations = {
  setItems(state, payload) {
    state.cartItems = payload
  },
  addToCart(state, payload) {
    // we will add the qty by 1
    // if cart items length > 0
    //  check if payload already exists in cart items
    //  yes -> find the index of payload in CI and update its qty by 1
    //  no -> push the item
    // else push the item
    let item = payload
    item = { ...item, quantity: 1 }
    if (state.cartItems.length > 0) {
      const bool = state.cartItems.some((i) => i.id === item.id)
      if (bool) {
        const itemIndex = state.cartItems.findIndex((el) => el.id === item.id)
        state.cartItems[itemIndex].quantity += 1
      } else {
        state.cartItems.push(item)
      }
    }
    state.cartItemCount++
  },
}

export const actions = {}

export const getters = {
  cartItemCount: (state) => state.cartItemCount,
  cartItems: (state) => state.cartItems,
}
