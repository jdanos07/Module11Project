import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !price) {
      setMessage('Please fill in all fields.');
      setSuccess(false);
      return;
    }

    // Here you can integrate with your backend API to save the product
    // Example: send data to your API
    const productData = {
      name: productName,
      price: parseFloat(price),
    };

    // Assuming a successful API request, we set success to true
    // Example of success:
    setMessage('Product added successfully!');
    setSuccess(true);

    // Clear the form
    setProductName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      {message && <Alert variant={success ? 'success' : 'danger'}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
