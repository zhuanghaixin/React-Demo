import { combineReducers } from 'redux';
import postReducers from './postReducers.js'
export default combineReducers({
   posts:postReducers
})

//第六步，返回回去走到根(index)reduncer,这个reducer会传给我们的Posts组件
