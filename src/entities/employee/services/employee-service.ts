import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { employeeGateWay } from 'shared/api'
import { Employee, EmployeeRequest } from 'entities/employee'

const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: employeeGateWay,
  }),
  tagTypes: ['Employee'],
  endpoints: builder => ({
    getEmployees: builder.query<Employee[], number>({
      query: (companyId: number) => ({
        url: `list?companyId=${companyId}`,
        method: 'GET',
      }),
      providesTags: ['Employee'],
    }),
    editEmployee: builder.mutation<Employee, EmployeeRequest>({
      query: ({ employeeId, companyId, name }) => ({
        url: 'edit',
        method: 'PATCH',
        body: { employeeId, companyId, name },
      }),
      invalidatesTags: ['Employee'],
    }),
    addEmployee: builder.mutation<Employee[], Partial<EmployeeRequest>>({
      query: ({ companyId, name }) => ({
        url: 'add',
        method: 'POST',
        body: { companyId, name },
      }),
      invalidatesTags: ['Employee'],
    }),
    removeEmployee: builder.mutation<
      void,
      { companyId: number; employeeId: number }
    >({
      query: ({ companyId, employeeId }) => ({
        url: `remove?companyId=${companyId}&employeeId=${employeeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),
  }),
})

export const {
  useAddEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeesQuery,
  useRemoveEmployeeMutation,
} = employeeApi

export default employeeApi
