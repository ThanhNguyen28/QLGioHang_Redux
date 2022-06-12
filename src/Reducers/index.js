import {combineReducers} from 'redux';
import product from './Product';
import cart from './Cart';
import message from './Message';
const myReducer = combineReducers({
    product,//product:product
    cart,
    message
});
export default myReducer