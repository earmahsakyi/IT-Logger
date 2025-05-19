import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';


// You don't need to manually define middleware if you're just using redux-thunk
const store = configureStore({
    reducer: rootReducer,  // the reducer you want to use
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),  // adding any additional middleware if necessary
    // You don't need to explicitly configure DevTools; it's automatically enabled
  });

  export default store;