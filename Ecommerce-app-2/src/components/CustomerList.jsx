import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { func } from "prop-types"

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            selectedCustomerId: null
        };
    }

    componentDidMount() {
        this.fetchCustomers();
    }

    fetchCustomers = () => {
        axios.get('http://127.0.0.1:5000/customers')
            .then(response => {
                this.setState({ custoemrs: response.data });
            })
            .catch(error => {
                console.error('Error retrieving data:', error);
            });
    }

    render() {
        const { customers } = this.state;

        return (
            <div className="customer-list">
                <h3>Customers</h3>
                <ul>
                    {customers.map(customer => {
                        <li key={customer.id}>
                            <Link to={`/edit-customer/${customer.id}`}>{customer.name}</Link>
                            <button onClick={() => this.deleteCustomer(customer.id)}>Delete</button>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

CustomerList.propTypes = {
    onCustoemrSelect: func
}
export default CustomerList;