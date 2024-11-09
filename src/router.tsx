import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
