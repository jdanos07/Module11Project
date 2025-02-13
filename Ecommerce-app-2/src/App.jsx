// import { Component } from "react";
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import CustomerList from './components/CustomerList';
import CustomerFormWrapper from './components/CustomerFormWrapper';
import ProductList from './components/ProductList';
import ProductFormWrapper from './components/ProductFormWrapper';
import OrderList from './components/OrdersList';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-customers/' element={<CustomerFormWrapper />} />
        <Route path='/edit-customers/:id' element={<CustomerFormWrapper />} />
        <Route path='/customers/' element={<CustomerList />} />
        <Route path='/products/' element={<ProductList />} />
        <Route path='/add-products/' element={<ProductFormWrapper />} />
        <Route path='/edit-products/:id' element={<ProductFormWrapper />} />
        <Route path='/orders/' element={<OrderList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectCustomerId: null,
//       selectedOrderId: null
//     };
//   }

//   handleCustomerSelect = (cusomerId) => {
//     this.setState({ selectCustomerId: cusomerId});
//   }

//   handleOrderSelect = (orderId) => {
//     this.setState({ selectedOrderId: orderId});
//   };

//   render() {
//     const {selectCustomerId, selectedOrderId } = this.state

//     return(
//       <div className="app-contatiner">
//         <h1>Customers</h1>
//         <customerList onCuttonClick={this.handleCustomerSelect} />
//         {selectCustomerId && (
//           <orderList
//             cusomerId = {selectCustomerId}
//             onOrderSelect={this.handleOrderSelect}
//           />
//         )}
//         {selectedOrderId && (
//           <ProductList orderId = {selectedOrderId} />
//         )}
//       </div> 
//     );
//   }
// }

export default App;
