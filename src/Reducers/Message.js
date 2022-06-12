import * as types from '../Constants/ActionTypes';
import * as mgs from '../Constants/Message';
var initialState=mgs.MSG_WELCOME;
const message =(state=initialState,action)=>{
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message; 
        default:
            return state;
    }   
};
export default message;