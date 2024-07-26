import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { employeeGateWay, companiesGateWay } from "shared/api";
import { storageManipulator } from "shared/lib/storage";
import type { Company } from "entities/companies";
import { EmployeeRequest } from "entities/employee";

export const handlers = [
  http.get(`${employeeGateWay}/list`, async ({ request }) => {
    const url = new URL(request.url);
    const companyId = Number(url.searchParams.get("companyId"));

    const data = storageManipulator.getEmployeesFromCompany(companyId);
    return HttpResponse.json(data);
  }),

  http.patch(`${employeeGateWay}/edit`, async ({ request }) => {
    const { employeeId, companyId, name } =
      (await request.json()) as EmployeeRequest;
    storageManipulator.updateEmployeeInLS(companyId, employeeId, { name });
    return HttpResponse.json(request);
  }),

  http.post(`${employeeGateWay}/add`, async ({ request }) => {
    const { companyId, name } = (await request.json()) as EmployeeRequest;
    storageManipulator.addEmployeeToCompany(companyId, { name });
    return HttpResponse.json(request);
  }),

  http.delete(`${employeeGateWay}/remove`, async ({ request }) => {
    const url = new URL(request.url);
    const companyId = Number(url.searchParams.get("companyId"));
    const employeeId = Number(url.searchParams.get("employeeId"));

    storageManipulator.deleteEmployeeFromCompany(companyId, employeeId);
    return HttpResponse.json({ success: true });
  }),

  http.get(`${companiesGateWay}/list`, () => {
    const data = storageManipulator.getCompaniesFromLS();
    return HttpResponse.json(data);
  }),

  http.patch(`${companiesGateWay}/edit`, async ({ request }) => {
    const { id, title } = (await request.json()) as Company;
    storageManipulator.updateCompanyInLS(id, { title });
    return HttpResponse.json(request);
  }),

  http.post(`${companiesGateWay}/add`, async ({ request }) => {
    const { title } = (await request.json()) as Company;
    storageManipulator.addCompanyToLS({ title });
    return HttpResponse.json(request);
  }),

  http.delete(`${companiesGateWay}/remove`, async ({ request }) => {
    const url = new URL(request.url);
    const companyId = Number(url.searchParams.get("companyId"));

    storageManipulator.deleteCompanyFromLS(companyId);
    return HttpResponse.json({ success: true });
  }),
];

const worker = setupWorker(...handlers);

export const mockServer = async () =>
  import.meta.env.VITE_DEV && worker.start({ onUnhandledRequest: "bypass" });
