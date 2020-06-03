//reducer的作用：返回新的状态

import {FETCH_POSTS,NEW_POST} from "../actions/types";

const initialState = {
    items: [],
    item:{}
}
//第五步，Reducer拿到Action和State进行判断，判断我们执行哪一个type，然后我们把当前状态State返回回去
export default function name(state = initialState, action) {
    console.log('reducers')
    console.log(action.type)
    switch (action.type) {

        case FETCH_POSTS:
            console.log(action.type)
            return {
                ...state,
                items:action.payload
            }
        case NEW_POST:
            console.log(action.type)
            return {
                ...state,
                item:action.payload
            }
        default:
            return state
    }
}

