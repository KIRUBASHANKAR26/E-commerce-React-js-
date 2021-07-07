import React,{ useState,useEffect } from 'react';
import Topbar from '../topbar';
import { connect } from 'react-redux';
import './style.css';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { getPayment } from '../../actions'


const Cart = (props) => {
    const [cart, setcart] = useState([])

 props.sentPayment(cart.reduce(
          (total,currentVal) => total + +currentVal.price * +currentVal.quantity,0));
        

    useEffect(() => {
        setcart(props.cart)
        console.log(cart)
    },[])
    const deleteCart = (id) =>{
        return cart.filter((item) => 
            item.id !== id
        );
    }

    
    return ( <div>
        <Topbar />
        <h2>CheckOut</h2>
        <h3>Total item :{cart.length}</h3>
        <div className="checkout-container">
            <div style={{width:"70%"}}>
                {cart?.map(({
                    id:cartId = 0,
                    name,
                    brand,
                    preview,
                    price,
                    quantity
                }) => 
                    <div className="checkout-info">
                        <img src={preview} alt={brand}/>

                        <div>
                            <p>{name}</p>
                            <p>Quantity x {quantity}</p>
                        </div>
                        {console.log("kk",cartId)}
                        <CloseIcon id={cartId} onClick={(e) =>setcart(deleteCart(e.target.id))} className="close"/>
                    </div>
                )}
            </div>
            <div className="total-amount">
                <h3>Total Amount:</h3>
                <p>Amount: {props.payment}</p>
                <Link to="/placeorder">
                <button>Place order</button>
                </Link>
            </div>
        </div>
        </div> );
}


const mapStateToProps = (state) => ({
    cart: state.cart,
    payment: state.payment
})

const mapDispatchToProps = (dispatch) => ({

    sentPayment: (payload) => dispatch(getPayment(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
