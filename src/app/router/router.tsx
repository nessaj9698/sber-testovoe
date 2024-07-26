import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "pages/homepage";
import { CompanyPage } from "pages/company-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/companies/:companyId", element: <CompanyPage /> },
]);

export const Router = () => <RouterProvider router={router} />;
