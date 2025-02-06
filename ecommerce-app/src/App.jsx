import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import CreateCustomerForm from "./Components/Customer/CustomerForm";
import CustomerDetails from "./Components/Customer/CustomerDetails";
import ProductList from "./Components/Product/ProductList";
import OrderPlace from "./Components/Order/OrderPlace";
import ProductForm from "./Components/Product/ProductForm";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">
            E-Commerce App
        </Navbar.Brand>
        <Nav className="me-auto">
        <Dropdown as={Nav.Item}>
            {/*Customers */}
              <DropdownButton variant="link" id="customers-dropdown" title="Customers">
                <Dropdown.Item as={Link} to="/customers">Customer List</Dropdown.Item>
                <Dropdown.Item as={Link} to="/add-customer">Add Customer</Dropdown.Item>
              </DropdownButton>
            </Dropdown>

            {/*Products */}
            <Dropdown as={Nav.Item}>
              <DropdownButton variant="link" id="products-dropdown" title="Products">
                <Dropdown.Item as={Link} to="/products">Product List</Dropdown.Item>
                <Dropdown.Item as={Link} to="/add-product">Add Product</Dropdown.Item>
              </DropdownButton>
            </Dropdown>

            {/*Orders */}
            <Dropdown as={Nav.Item}>
              <DropdownButton variant="link" id="orders-dropdown" title="Orders">
                <Dropdown.Item as={Link} to="/add-order">Add Order</Dropdown.Item>
              </DropdownButton>
            </Dropdown>

        </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/add-customer" element={<CreateCustomerForm />} />
          <Route path="/customers/:id" element={<CustomerDetails />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/add-order" element={<OrderPlace />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
