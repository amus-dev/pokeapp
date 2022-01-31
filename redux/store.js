import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./reducers";

const rootReducer = combineReducers({ pokemonReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
