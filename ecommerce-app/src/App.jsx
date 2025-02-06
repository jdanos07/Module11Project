import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import CreateCustomerForm from "./Components/Customer/CustomerForm";
import CustomerDetails from "./Components/Customer/CustomerDetails";
import ProductList from "./Components/Product/ProductList";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            E-Commerce App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/customers">
              Customers
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/customers" element={<CreateCustomerForm />} />
          <Route path="/customers/:id" element={<CustomerDetails />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
