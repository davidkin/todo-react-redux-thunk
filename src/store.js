import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import createRootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

export default function configureStore (preloadedState) {
    const store = createStore(
        createRootReducer(),
        preloadedState,
        composeEnhancers(
            applyMiddleware(thunk)
        ),
    );

    return store;
}
