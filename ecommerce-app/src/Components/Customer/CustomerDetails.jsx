import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById, deleteCustomer } from "../../services/api";
import { Button, Card, Alert } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById(id);
        setCustomer(data);
      } catch (err) {
        setError("Failed to fetch customer details.");
      }
    };
    fetchCustomer();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteCustomer(id);
      alert("Customer deleted successfully!");
      setShowDeleteModal(false);
    } catch (err) {
      setError("Failed to delete customer.");
    }
  };

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!customer) return <p>Loading...</p>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{customer.name}</Card.Title>
        <Card.Text>Email: {customer.email}</Card.Text>
        <Card.Text>Phone: {customer.phone}</Card.Text>
        <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
          Delete Customer
        </Button>
      </Card.Body>
      <ConfirmationModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this customer?"
      />
    </Card>
  );
};

export default CustomerDetails; 