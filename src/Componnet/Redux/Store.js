import { configureStore } from '@reduxjs/toolkit'
import Cartreducer from './Slices'

export const store = configureStore({
  reducer: {
    cart:Cartreducer
  },
})