import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducers from "./reducers/weatherReducers"
import alertReducers from "./reducers/alertReducer"

const rootReducer = combineReducers({
  weather: weatherReducers,
  alert: alertReducers
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;