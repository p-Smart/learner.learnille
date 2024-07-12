import { create } from 'zustand'
import { authSlice } from './Auth/AuthSlice'

export const useBoundStore = create((...a) => ({
    ...authSlice(...a)
}))