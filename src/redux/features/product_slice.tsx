import { ICart } from '../../models/Cart';
import { IProduct } from '../../models/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    cartState: [] as ICart[]
}

export const products = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state: { cartState: ICart[] }, action: PayloadAction<IProduct>) => {
            const indexOfItem = state.cartState.findIndex(item => { return item.product.id == action.payload.id });
            if (indexOfItem == -1) {
                state.cartState.push({
                    count : 1,
                    product: action.payload
                });
            } else {
                state.cartState[indexOfItem].count += 1
            }
        },
        removeProduct: (state:  { cartState: ICart[] }, action: PayloadAction<IProduct>) => {
            const indexOfItem = state.cartState.findIndex(item => { return item.product.id == action.payload.id });
            if(indexOfItem == -1) {
                return
            } else {
                if(state.cartState[indexOfItem].count == 1) {
                    state.cartState.splice(indexOfItem, 1);
                } else {
                    state.cartState[indexOfItem].count -= 1;
                }
            }
        }
    }
});

export const {addProduct, removeProduct} = products.actions;
export const productReducer = products.reducer;