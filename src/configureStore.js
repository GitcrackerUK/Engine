import { createStore,applyMiddleware, compose } from "redux";
import rootReducer from './reducers/index.reducer.js'
import thunk from 'redux-thunk';
// const store = createStore(rootReducer, preloadedState, composedEnhancers)
// export default store