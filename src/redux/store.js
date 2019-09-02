import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers"

// syncs browser history with the store, exported to use with routes

const initialState = {}
const enhancers = []
const middleware = []

const windowGlobal = typeof window !== "undefined" && window

if (process.env.NODE_ENV === "development" && windowGlobal) {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
