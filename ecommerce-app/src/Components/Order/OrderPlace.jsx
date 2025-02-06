import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const PlaceOrderForm = ({ customers = [], products = [] }) => {
  const [customerId, setCustomerId] = useState('');
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [orderDate, setOrderDate] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerId || selectedProductIds.length === 0 || !orderDate) {
      setMessage('Please fill in all fields.');
      setSuccess(false);
      return;
    }

    const orderData = {
      customerId,
      products: selectedProductIds,
      orderDate,
    };

    // Here you would typically send the orderData to your backend API.
    setMessage('Order placed successfully!');
    setSuccess(true);

    // Clear form after successful submission
    setCustomerId('');
    setSelectedProductIds([]);
    setOrderDate('');
  };

  const handleProductSelection = (e) => {
    const { value, checked } = e.target;
    setSelectedProductIds((prev) =>
      checked ? [...prev, value] : prev.filter((id) => id !== value)
    );
  };

  return (
    <div>
      <h2>Place New Order</h2>
      {message && <Alert variant={success ? 'success' : 'danger'}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        {/* Customer Selection */}
        <Form.Group controlId="customerId">
          <Form.Label>Select Customer</Form.Label>
          <Form.Control
            as="select"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          >
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Product Selection */}
        <Form.Group controlId="productSelection" className="mt-3">
          <Form.Label>Select Products</Form.Label>
          <div>
            {products.map((product) => (
              <Form.Check
                key={product.id}
                type="checkbox"
                label={`${product.name} - $${product.price}`}
                value={product.id}
                checked={selectedProductIds.includes(product.id.toString())}
                onChange={handleProductSelection}
              />
            ))}
          </div>
        </Form.Group>

        {/* Order Date */}
        <Form.Group controlId="orderDate" className="mt-3">
          <Form.Label>Order Date</Form.Label>
          <Form.Control
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default PlaceOrderForm;
