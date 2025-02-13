import axios from "axios";
import { array, func } from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/products');
            setProducts(response.data);
           } catch (error) {
            console.error('Error retrieving products:', error);
           }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/products/${id}`);
        } catch (error) {
            console.error('Error retrieving product:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return(
        <div className="product-list">
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={products.id}>
                        {product.name} (ID: {product.id})
                        <button onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProductList.propTypes = {
    products: array,
    onEditProduct: func,
    onProductDeleted: func
}

export default ProductList;
