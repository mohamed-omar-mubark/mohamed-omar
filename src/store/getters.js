// Count products in shopping cart
export const cartItemCount = (state) => {
  return state.shoppingCart ? state.shoppingCart.length : 0;
}

// Count total price in shopping cart
export const cartTotalPrice = (state) => {
    return state.cartTotal;
}