import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItemType } from '../../components/Listagem'

type CheckoutState = {
  isOpen: boolean
  items: MenuItemType[]
}

const initialState: CheckoutState = {
  isOpen: false,
  items: []
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItemType>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = checkoutSlice.actions
export default checkoutSlice.reducer
