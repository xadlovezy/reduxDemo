import {DECREASE, INCREASE} from "../actions/ActionType";
// 原始默认state
const defaultState = {
    count: 7,
}

export default reducer = (state=defaultState, action)=>{
    switch (action.type){
        case INCREASE:
            return {
                ...state,
                count:state.count+1
            }
        case DECREASE:
            return {
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}
