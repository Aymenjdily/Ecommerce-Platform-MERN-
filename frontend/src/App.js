import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import { Header, Sidebar, Footer } from './components';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route
            path='/' element={<Home />}
          />
          <Route
            path='/product/:id'
            element={<ProductDetails />}
          />
          <Route
            path='/checkout'
            element={<Checkout />}
          />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
