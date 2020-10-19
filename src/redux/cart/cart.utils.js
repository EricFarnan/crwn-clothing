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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // find the existing cart item
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    // if the quantity is 1 then filter out the item
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    // if there is more than 1 item quantity then map the existing cart items with the item to remove but subtract 1 from the quantity
    // if the item doesnt exist somehow just return the cartItem
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? 
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};