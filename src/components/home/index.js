import React, { useState, useEffect } from 'react';
import axios from "axios";
import { productApi } from '../../API';
import Card from "../card"
import { connect } from 'react-redux'
import { getProducts,addProduct } from '../../actions';
import Topbar from "../topbar";
import Slider from "../slider";


const Home = (props) => {
    const [loader, setloader] = useState(true)
    useEffect(() => {
        axios.get(productApi,{headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function (response) {
            props.sendProducts(response.data);
            setloader(false)
          })
        .catch((err) => console.error(err));  
    }, [])

    return ( <>  
    <Topbar />
    <Slider /> 
    <div style={{display:"flex",flexWrap:"wrap", gap:"2rem" , justifyContent:"center"}}>
        {
            props.products?.map((item) => 
                <Card {...item} addProduct={() => props.addProductToCart(item)} loading={loader}/>)
        }

    </div> </> );
}
const mapStateToProps = (state) => ({
    products: state.products,
    cart: state.cart,
})

const mapDispatchToProps = (dispatch) => ({
    sendProducts: (payload) => dispatch(getProducts(payload)),
    addProductToCart: (payload) => dispatch(addProduct(payload)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
