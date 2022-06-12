import React from 'react';
import * as Message from '../Constants/Message'
class Product extends React.Component {
    render() {
      var {product}=this.props
      return (
        <div className="col-lg-4 col-md-6 mb-r">
         <div className="card text-center card-cascade narrower">
           <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.image}
              className="img-fluid"
              alt=""
            />
            <a href="thanh.html">
              <div
                className="mask waves-light waves-effect waves-light"
              ></div>
            </a>
           </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <h6>{product.name}</h6>
              </strong>
            </h4>
            <ul className="rating">
              <li>
              {this.showRatings(product.rating)}
              </li>
            </ul>
            <p className="card-text">
             {product.description}
            </p >
            <div className="card-footer">
              <span className="left">  {product.price}</span>
              <span className="right" onClick={()=>{this.onAddToCart(product)}}>
                <p 
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    
      );
    }
    showRatings=(rating)=>{
      var r= [];
        for(let i=1;i<=rating;i++){
          r.push(<i key={i} className="fa fa-star"></i>);
        }
        for(let j=1;j <= (5-rating);j++){
          r.push(<i  key={j+10} className="fa fa-star-o"></i>);
        }
        return  r;
    }
    onAddToCart=(product)=>{
       this.props.addCart(product);
       this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
}
export default Product;
