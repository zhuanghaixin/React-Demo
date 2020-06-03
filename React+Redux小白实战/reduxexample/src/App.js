import React from 'react';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import store from './store'
// import {store}  from './store'
import {Provider} from 'react-redux'
// import { createStore,applyMiddleware } from 'redux';
import './App.css';
//createStore(reducer, [preloadedState], [enhancer])
// const store=createStore(()=>[],{},applyMiddleware())
function App() {

  return (
      <Provider store={store}>
          <div className="App">
              <PostForm></PostForm>
              <Posts></Posts>

          </div>
      </Provider>
  );

}

export default App;
