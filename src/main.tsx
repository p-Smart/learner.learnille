import "@/styles/global.css";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider
    theme={theme}
    toastOptions={{ defaultOptions: { position: "top", duration: 5000 } }}
  >
    <App />
  </ChakraProvider>
);
