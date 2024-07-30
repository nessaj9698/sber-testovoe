import { combineReducers } from '@reduxjs/toolkit'
import { employeeApi } from 'entities/employee'
import { companyApi } from 'entities/companies'

export const rootReducer = combineReducers({
  [employeeApi.reducerPath]: employeeApi.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
})
