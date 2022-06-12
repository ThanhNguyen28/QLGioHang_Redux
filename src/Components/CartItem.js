import React from 'react';
import * as Message from '../Constants/Message'
class CartItem extends React.Component {
    render() {     
      var {cart}=this.props;
      var {quantity}=cart;
      return (
        <tr>
        <th scope="row">
          <img
            src={cart.product.image}
            alt={cart.product.image}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cart.product.name}</strong>
          </h5>
        </td>
        <td>{cart.product.price}</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={()=>{this.onClickDelete(cart.product,cart.quantity-1)}}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <p>—</p>
            </label>
            <label onClick={()=>{this.onClickDelete(cart.product,cart.quantity+1)}}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <p>+</p>
            </label>
          </div>
        </td>
      <td>{this.showSumPrice(cart.product.price,quantity)}</td>
        <td>
          <button onClick={()=>{this.onDeleteItem(cart.product)}}
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
      );
    }
        showSumPrice=(price,quantity)=>{
          return price*quantity
        }
    onDeleteItem=(product)=>{
       this.props.onDeleteItem(product);
       this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onClickDelete=(product,quantity)=>{
      if(quantity>0){
          var {onChangeMessage,onUpdateItem}=this.props;
          onUpdateItem(product,quantity);
          onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
      }
     
    }
}
export default CartItem;
