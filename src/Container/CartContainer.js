import React from 'react';
import {connect} from 'react-redux';
import Cart from '../Components/Cart';
import CartItem from '../Components/CartItem';
import CartResult from '../Components/CartResult';
//import PropTypes from 'prop-types';
import * as Message from '../Constants/Message';
import {actRemoveProductInCart,actChangeMessage,actUpdateProductInCart} from '../Actions/index'
class CartContainer extends React.Component {
    render() {
      var {cart}=this.props;
      return (
          <div>
            <Cart>
              {this.showCartItem(cart)}
              {this.showTotalAmount(cart)}            
            </Cart>
          </div>
      );
    }
    showCartItem=(cart)=>{
       var r=Message.MSG_CART_EMPTY;
       var {onDeleteItem,onChangeMessage,onUpdateItem}=this.props;
       if(cart.length > 0){
          r=cart.map((item,index)=>{
            return (
                     <CartItem 
                         key={index} 
                         cart={item} 
                         index={index} 
                         onDeleteItem={onDeleteItem}
                         onChangeMessage={onChangeMessage}
                         onUpdateItem={onUpdateItem}
                         />
            );
          });
       }
       return r
    }
    showTotalAmount=(cart)=>{
      var r='';
      if(cart.length > 0){
         return <CartResult cart={cart} />
      }
      return r
    }
   }
// kiem tra du lieu
/*
CartContainer.propTypes={
    cart:PropTypes.arrayOf(
      PropTypes.shape({
      products:PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isdRequire,
        image:PropTypes.string.isdRequire,
        description:PropTypes.string.isdRequire,
        price:PropTypes.number.isRequired,
        inventory:PropTypes.number.isRequired,
        rating:PropTypes.number.isRequired
      }).isRequired,
      quantity:PropTypes.number.isRequired
    })).isRequired   
}*/
const mapStatetoProps=(state)=>{
    return {
      cart:state.cart  /* get cart from (từ) store react-redux  */
    }
 };
const mapDisaptchtoProps=(dispath,props)=>{
   return {
    onDeleteItem:product=>{
      dispath(actRemoveProductInCart(product)); /* dispath() get  actRemoveProductInCart from (từ) Actions */
    },
    onChangeMessage:message=>{
      dispath(actChangeMessage(message))
    },
    onUpdateItem:(product,quantity)=>{
      dispath(actUpdateProductInCart(product,quantity));
    }
  }   
};
export default connect(mapStatetoProps,mapDisaptchtoProps)(CartContainer);
//ket noi len Reducers lay state -> products