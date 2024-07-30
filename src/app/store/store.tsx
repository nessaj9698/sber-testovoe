import { configureStore } from '@reduxjs/toolkit'
import { employeeApi } from 'entities/employee'
import { companyApi } from 'entities/companies'
import { Provider } from 'react-redux'

import { rootReducer } from './reducers'
import { FC } from 'react'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      employeeApi.middleware,
      companyApi.middleware
    ),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const withStore = function <P extends object>(Component: FC<P>): FC<P> {
  return (props: P) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
