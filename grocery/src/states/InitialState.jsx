export const initialState = {
    favouriteIds : [],
    products : []
}

export const reducer = (state , action) => {
    switch(action.type) {
        case 'favourite-add':
            return {
                ...state,
                favouriteIds: [...state.favouriteIds , action.data],
            };
        case 'favourite-remove': //TODO
            // Remove item by boolean state
            return {}
        case 'cart-add':
            // Check if that item is in cart
            // if item exists , add the item quantitiy by X 
            // if not , add to cart
            return {} //TODO
        case 'cart-remove':
            // Check if that item is in cart
            // if item exists , decrease the item quantity by 1
            // if quantity equals to 0 , then remove item
            return {} //TODO
        case 'cart-delete':
            return {} //TODO
        default:
            throw Error(`Maybe next time!`);
    }
}