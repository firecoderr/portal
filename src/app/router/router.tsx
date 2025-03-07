import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load the components
const Login = lazy(() => import("../pages/Login"));
const CreateForm = lazy(() => import("../pages/CreateForm"));
const Page_404 = lazy(() => import("../pages/Page_404"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CreateForm />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Page_404 />
      </Suspense>
    ),
  },
]);
