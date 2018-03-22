import * as ActionType from "./ActionType";


/**
 * 递增方法
 * @returns {{type}}
 */
export  const increase =()=>{
    return {
        type: ActionType.INCREASE
    }
}

/**
 * 递减方法
 * @returns {{type}}
 */
export  const decrease =()=> {
    return {
        type: ActionType.DECREASE
    }
}
