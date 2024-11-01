import "../src/index.css"
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
  import App from "./App";
  import Visualizar from "./assets/pages/Visualizar";
  import Atualizar from "./assets/pages/Atualizar";
  import Excluir from "./assets/pages/Excluir";

const router = createBrowserRouter([
  {
        path: "/",
        element: <App/>,
  },
  {
    path: "/visualizar",
    element: <Visualizar/>,
},
{
  path: "/atualizar",
  element: <Atualizar/>,
},
{
  path: "/excluir",
  element: <Excluir/>,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
