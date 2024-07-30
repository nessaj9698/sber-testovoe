import type { Employee } from 'entities/employee'
import type { Company } from 'entities/companies'
import { mockData } from './data'

export type StorageData = {
  companies: Company[]
}

const LOCAL_STORAGE_KEY = 'companies'

export const initializeMockData = () => {
  const existingData = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!existingData) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData))
  }
}

export const getCompanies = (): Company[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (data) {
    const storageData: StorageData = JSON.parse(data)
    return storageData.companies
  }

  return []
}

export const getEmployeesByCompanyId = (companyId: number): Employee[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (data) {
    const storageData: StorageData = JSON.parse(data)
    const company = storageData.companies.find(c => c.id === companyId)

    if (company) {
      return company.employees
    }
  }

  return []
}

export const updateCompany = (
  companyId: number,
  updatedFields: Partial<Company>
): void => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (data) {
    const storageData: StorageData = JSON.parse(data)
    const companyIndex = storageData.companies.findIndex(
      company => company.id === companyId
    )

    if (companyIndex !== -1) {
      storageData.companies[companyIndex] = {
        ...storageData.companies[companyIndex],
        ...updatedFields,
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData))
    } else {
      throw new Error(`Компания с id: ${companyId} не найдена!`)
    }
  } else {
    throw new Error('Нет данных')
  }
}

export const updateEmployee = (
  companyId: number,
  employeeId: number,
  updatedFields: Partial<Employee>
): void => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (data) {
    const storageData: StorageData = JSON.parse(data)
    const companyIndex = storageData.companies.findIndex(
      company => company.id === companyId
    )

    if (companyIndex !== -1) {
      const employeeIndex = storageData.companies[
        companyIndex
      ].employees.findIndex(e => e.id === employeeId)

      if (employeeIndex !== -1) {
        storageData.companies[companyIndex].employees[employeeIndex] = {
          ...storageData.companies[companyIndex].employees[employeeIndex],
          ...updatedFields,
        }

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData))
      } else {
        throw new Error(`Сотрудник с id: ${employeeId} не найден!`)
      }
    } else {
      throw new Error(`Компания с id: ${companyId} не найдена!`)
    }
  } else {
    throw new Error('Нет данных')
  }
}

export const addCompany = (newCompany: Partial<Company>): void => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)
  const storageData: StorageData = data ? JSON.parse(data) : { companies: [] }

  const exists = storageData.companies.some(
    company => company.title === newCompany.title
  )

  if (exists) {
    throw new Error('Компания с таким названием уже существует')
  }

  const entityId = storageData.companies.length + 1
  const company: Company = {
    id: entityId,
    title: newCompany.title!,
    employees: newCompany.employees || [],
  }

  storageData.companies.push(company)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData))
}

export const addEmployeeToCompany = (
  companyId: number,
  newEmployee: Partial<Employee>
): void => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)
  const storageData: StorageData = data ? JSON.parse(data) : { companies: [] }

  const companyIndex = storageData.companies.findIndex(
    company => company.id === companyId
  )

  if (companyIndex === -1) {
    throw new Error(`Компания с id: ${companyId} не найдена!`)
  }

  const exists = storageData.companies[companyIndex].employees.some(
    e => e.name === newEmployee.name
  )

  if (exists) {
    throw new Error('Сотрудник с таким именем уже существует в компании')
  }

  const entityId = storageData.companies[companyIndex].employees.length + 1
  const employee: Employee = {
    id: entityId,
    name: newEmployee.name!,
  }

  storageData.companies[companyIndex].employees.push(employee)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData))
}

export const deleteCompany = (companyId: number): void => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (data) {
    const storageData: StorageData = JSON.parse(data)
    const companyIndex = storageData.companies.findIndex(
      company => company.id === companyId
    )

    if (companyIndex !== -1) {
      storageData.companies.splice(companyIndex, 1)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData))
    } else {
      throw new Error(`Компания с id: ${companyId} не найдена!`)
    }
  } else {
    throw new Error('Нет данных')
  }
}

export const deleteEmployeeFromCompany = (
  companyId: number,
  employeeId: number
): void => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (data) {
    const storageData: StorageData = JSON.parse(data)
    const companyIndex = storageData.companies.findIndex(
      company => company.id === companyId
    )

    if (companyIndex !== -1) {
      const employeeIndex = storageData.companies[
        companyIndex
      ].employees.findIndex(employee => employee.id === employeeId)

      if (employeeIndex !== -1) {
        storageData.companies[companyIndex].employees.splice(employeeIndex, 1)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData))
      } else {
        throw new Error(`Сотрудник с id: ${employeeId} не найден!`)
      }
    } else {
      throw new Error(`Компания с id: ${companyId} не найдена!`)
    }
  } else {
    throw new Error('Нет данных')
  }
}
