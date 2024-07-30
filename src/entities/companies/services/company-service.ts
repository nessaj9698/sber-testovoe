import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { companiesGateWay } from 'shared/api'
import type { Company } from 'entities/companies'

const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: companiesGateWay,
  }),
  tagTypes: ['Company'],
  endpoints: builder => ({
    getCompanies: builder.query<Company[], void>({
      query: () => 'list',
      providesTags: ['Company'],
    }),
    editCompany: builder.mutation<Company, { id: number; title: string }>({
      query: ({ id, title }) => ({
        url: 'edit',
        method: 'PATCH',
        body: { id, title },
      }),
      invalidatesTags: ['Company'],
    }),
    addCompany: builder.mutation<Company[], string>({
      query: title => ({
        url: 'add',
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Company'],
    }),
    removeCompany: builder.mutation<Company[], number>({
      query: companyId => ({
        url: `remove?companyId=${companyId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Company'],
    }),
  }),
})

export const {
  useAddCompanyMutation,
  useEditCompanyMutation,
  useGetCompaniesQuery,
  useRemoveCompanyMutation,
} = companyApi

export default companyApi
