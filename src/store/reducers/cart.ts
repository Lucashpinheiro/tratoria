import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestaurantType } from '../../components/Listagem'

type CartState = {
  items: RestaurantType[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestaurantType>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
