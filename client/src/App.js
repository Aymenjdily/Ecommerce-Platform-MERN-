/* eslint-disable valid-typeof */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Order, Products, Customers } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route 
              path="/"
              element={<Dashboard />}
            />
            <Route 
              path="/orders"
              element={<Order />}
            />
            <Route 
              path="/products"
              element={<Products />}
            />
            <Route 
              path="/customers"
              element={<Customers />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
