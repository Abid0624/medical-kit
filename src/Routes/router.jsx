import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Components/Error";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Cards from "../Components/Cards";
import About from "../Pages/About";
import Support from "../Pages/Support";
import CardDetails from "../Pages/CardDetails";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      // Home page
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/products.json"), // to show top products
      },

      // Products page
      {
        path: "/products",
        element: <Products />, // layout with categories sidebar
        children: [
          // Show all products by default
          {
            index: true,
            element: <Cards />,
            loader: () => fetch("/products.json"),
          },
          // Show products filtered by category
          {
            path: "category/:category",
            element: <Cards />,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      // Card details page
      {
        path: "/card/:id",
        element: <CardDetails />,
        loader: () => fetch("/products.json"),
      },
      // About page
      {
        path: "/about",
        element: <About />,
      },
      // Suppport page
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

export default router;
