export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check if the item to add already exists in the cart
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // if the item to add already exists then locate it in the cart and add 1 item quantity, if not then just add the item
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem);
    }

    // if the item did not exist already in the cart spread in the existing cart items and the new item with the quantity 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};
