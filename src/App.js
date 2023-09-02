import "./App.css";
import React, { lazy, Suspense } from "react";
import Accordion from "./Components/Accordion";
import UserForm from "./forms/UserForm";
import Counter from "./ReduxExampleCounter/Counter";
import ErrorPage from "./Components/ErrorPage";
import RootLayout from "./Components/RootLayout";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";

import GetAsyncRequest, {
  loaderPeopleData as peopleApi,
} from "./HttpRequests/GetPeopleListAsync";
import GetPersonDetail from "./HttpRequests/GetPersonDetail";
import Loader from './Utils/Loader';
import Products from './Components/Products';

// // Lazy Loading
// const EditPersonLazy = lazy(() => import("./HttpRequests/EditPerson"));

import EditPerson, {
  loaderData as personLoaderData,
} from "./HttpRequests/EditPerson";

function App() {
  // old style
  // const routerDefinitions = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Accordion />} />
  //     <Route path="/people" element={<GetAsyncRequest />} />
  //     <Route path="/userForm" element={<UserForm />} />
  //     <Route path="/rootLayout" element={<RootLayout />} />
  //   </Route>
  // );
  // const router = createBrowserRouter(routerDefinitions);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Accordion /> },
        { path: "/people", element: <GetAsyncRequest />, loader: peopleApi }, // action for post calls / submitting form
        { path: "/people/:id", element: <GetPersonDetail /> },
        {
          path: "/personEdit/:detailId",
          id: "personId",
          element: (
            <Suspense fallback={<Loader />}>
              <EditPerson />
            </Suspense>
          ),
          loader: personLoaderData,
        },
        { path: "/userForm", element: <UserForm /> },
        { path: "/counter", element: <Counter /> },
        { path: "/products", element: <Products/>}
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
