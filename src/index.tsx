import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Tour from "./Pages/Tour";
import ContactUs from "./Pages/ContactUs";
import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from "./Components/AppContainer";
import Shop from "./Pages/Shop";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tour", element: <Tour /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/shop", element: <Shop /> },
  { path: "*", element: <Home /> },
]);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* AppContainer is a wrapper that puts the nav and footer on every page */}
      <AppContainer>
        {/* I'm  using react-router-dom v6 */}
        <RouterProvider router={router} />
      </AppContainer>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
