import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Start Router
import { BrowserRouter } from "react-router-dom";

// Contexts
import ProductContextProvider from "./contexts/ProductContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SidebarProvider>
        <ProductContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ProductContextProvider>
    </SidebarProvider>
);