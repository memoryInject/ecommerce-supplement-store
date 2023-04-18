import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <Router>
      <Header />

      <main
        className="py-3"
        style={{
          marginTop: '50px',
        }}
      >
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/search/:keyword" element={<ProductListPage />} />
            <Route path="/page/:pageNumber" element={<ProductListPage />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<ProductListPage />}
            />
            <Route
              path="/collections/:collection"
              element={<ProductListPage />}
            />
            <Route
              path="/collections/:collection/page/:pageNumber"
              element={<ProductListPage />}
            />
            <Route path="products/:id" element={<ProductDetailPage />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
