import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
//初始状态
const initialState = {}

//中间件
const middleware=[thunk]

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
//第四步，Store拿到Action以及前一个状态State通过中间件给我们的Reducer
export default store;
