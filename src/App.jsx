import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
// Add page imports here
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";

// This is a public storefront with no login gate, so the Base44-hosted
// auth/public-settings layer that used to wrap the app has been removed —
// it only worked inside the Base44 editor and isn't available locally.
const StorefrontApp = () => (
  <CartProvider>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </CartProvider>
);

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <StorefrontApp />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
