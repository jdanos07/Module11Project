import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { createCustomer } from "../../services/api";

const CreateCustomerForm = () => {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomer(customer);
      alert("Customer created successfully!");
      setCustomer({ name: "", email: "", phone: "" });
    } catch (err) {
      setError("Failed to create customer.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          required
        />
      </Form.Group>
      <Button type="submit" className="mt-3">
        Create Customer
      </Button>
    </Form>
  );
};

export default CreateCustomerForm;