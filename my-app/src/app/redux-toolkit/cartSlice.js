// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find(item => item.idProduct === product.idProduct);
            if (existingProduct) {
                existingProduct.quantity += 1;

            } else {
                const newProduct = { ...product, quantity: 1 };
                state.items.push(newProduct);

            }
            console.log('✅ Giỏ hàng sau cập nhật:', current(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeZeroPriceItems(state) {
            state.items = state.items.filter(item => Number(item.price) > 0);
        },
    },
});

export const { addToCart, removeFromCart, clearCart , removeZeroPriceItems} = cartSlice.actions;
export default cartSlice.reducer;
