import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/add" component={AddProduct} />
            <Route path="/edit/:id" component={EditProduct} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;