export type Employee = {
  id: number
  name: string
}

export type EmployeeRequest = {
  companyId: number
  employeeId: number
  name?: string
}
