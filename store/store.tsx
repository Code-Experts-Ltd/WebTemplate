import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { usersApi } from './services/userApis'

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
