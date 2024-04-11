import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  </React.StrictMode>
);