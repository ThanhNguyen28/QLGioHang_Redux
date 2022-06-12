import React from 'react';
import {connect} from 'react-redux';
import Products from '../Components/Products'
import Product from '../Components/Product'
import PropTypes from 'prop-types'
import {addCart, actChangeMessage} from '../Actions/index'
class ProductsContainer extends React.Component {
    render() {
      var {products}=this.props;
      return (
          <Products>
              {this.showProduct(products)}
          </Products>
      );
    }
    showProduct=(products)=>{
        var r=null;
        var {addCart,onChangeMessage}=this.props;
        if(products.length>0){
          r=products.map((product,index) => {
            return <Product 
                        key={index} 
                        product={product}
                        addCart={addCart}
                        onChangeMessage={onChangeMessage}
                        />
          });
        }
        return r;
      }
   }
// kiem tra du lieu
ProductsContainer.propTypes={
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isdRequire,
            image:PropTypes.string.isdRequire,
            description:PropTypes.string.isdRequire,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired,
    addCart:PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired
}
const mapStatetoProps=(state)=>{
    return {
      products:state.product,

    }
 };
const mapDisaptchtoProps=(dispatch,props)=>{
   return {
        addCart:(product)=>{
           dispatch(addCart(product,1));
        },
        onChangeMessage:(message)=>{
          dispatch(actChangeMessage(message));
        } 
    }  
 };
export default connect(mapStatetoProps,mapDisaptchtoProps)(ProductsContainer);
//ket noi len Reducers lay state -> products