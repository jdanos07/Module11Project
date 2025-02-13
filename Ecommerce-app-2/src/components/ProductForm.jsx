import { Component } from "react";
import axios from "axios";
import { func, number } from 'prop-types';
import { Form, Button, Alert, Container } from 'react-bootstrap'

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            errors: {},
            selectedProductId: null,
            isLoading: false,
            error: null
        }; 
    }

    componentDidMount() {
        const { id } = this.props.params;
        console.log(id);
        if (id) {
            this.fetchProductData(id);
        }
    };

    fetchProductData = (id) => {
        axios.get(`http://127.0.0.1:5000/products/${id}`)
            .then(response => {
                const ProductData = response.data;
                this.setState({
                    name: ProductData.name,
                    price: ProductData.price,
                    selectedProductId: id
                });
            })
            .catch(error => {
                console.error('Error retrieving product information:', error);
            });
        };
        
    componentDidUpdate(prevProps) {
        if (prevProps.productId !== this.props.productId) {
            this.setState({ selectedProductId: this.props.productId });

            if(this.props.ProductId) {
                axios.get(`http://127.0.0.1:5000/products/${this.props.productId}`)
                    .then(response => {
                        const productData = response.data;
                        this.setState({
                            name: productData.name,
                            price: productData.price,
                        });
                    })
                    .catch(error => {
                        console.error('Error retrieving Product data:', error);
                    });
            } else {
                this.setState({
                    name: '',
                    price: '',
                });
            }
        }
    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    validateForm = () => {
        const {name, price} = this.state;
        const errors = {};
        if (!name) errors.name = 'Name is required';
        if (!price) errors.price = 'price is required';
        return errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.setState({ isLoading: true, error: null})
            const productData = {
                name: this.state.name.trim(),
                price: this.state.price.trim(),
            };
            const apiUrl = this.state.selectedProductId 
                ? `http://127.0.0.1:5000/products/${this.state.selectedProductId}`
                : 'http://127.0.0.1:5000/products';
            
            const httpMethod = this.state.selectedProductId ? axios.put : axios.post;

            httpMethod(apiUrl, productData)
                .then(() => {

                    this.setState({
                        name: '',
                        price: '',
                        errors: {},
                        selectedProductId: null,
                        isLoading: false
                    });
                    this.props.navigate('/product')
                    this.setState({ isLoading: false})
                })
                .catch(error => {
                    this.setState({ error: error.toString(), isLoading: false});
                
                });
        } else { 
            this.setState({ errors });
        }
    };

    render() {
        const { name, price, errors, error, isLoading } = this.state;

        
        
        return (
            <Container>
                {isLoading && <Alert variant="info">Entering data ...</Alert>}
                {error && <Alert variant="danger">Error entering data: {error}</Alert>}

                <h3>Add or Edit Product</h3>
                <Form onSubmit={this.handleSubmit}>
                
                    <Form.Group controlId="formGroupName">    
                        <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" name="name" value={name} onChange={this.handleChange} />
                            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </Form.Group>        
                    
                    <Form.Group controlId="formGroupprice">    
                        <Form.Label>price:</Form.Label>
                            <Form.Control type="number" name="price" value={price} onChange={this.handleChange} />
                            {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">Submit</Button>                   
                </Form>
            </Container>
        );
    }
}

ProductForm.propTypes = {
    ProductId: number,
    onUpdateProductList: func,

}

export default ProductForm;