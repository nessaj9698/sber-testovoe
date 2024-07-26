import type { Employee } from "entities/employee";

export type Company = {
  id: number;
  title: string;
  employees: Employee[];
};

export const isCompany = (data: Company | Employee): data is Company => {
  return (data as Company).title !== undefined;
};
