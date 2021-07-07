import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Switch,} from 'react-router-dom'
import productDetails from './components/productDetails';
import Cart from './components/cart';
import Placeorder from './components/placeorder';
import {Login} from './components/login';


function App() {
  return (<>
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={productDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/placeorder" component={Placeorder} />
        <Route path="/login" component={Login} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
