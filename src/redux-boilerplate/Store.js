import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const loadStoreFromLocalStorage = () => {
  try {
    const serializedStore = localStorage.getItem("store");
    if (serializedStore == null) return undefined;
    return JSON.parse(serializedStore);
  } catch (exception) {
    console.log("STORAGE: Store retrival failed!");
  }
};

const saveStoreToLocalStorage = store => {
  try {
    const seralizedStore = JSON.stringify(store);
    localStorage.setItem("store", seralizedStore);
  } catch (exception) {
    console.log("STORAGE: Local Storage inaccessable!");
  }
};

const persistedStore = loadStoreFromLocalStorage();

const Store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

Store.subscribe(() => saveStoreToLocalStorage(Store.getState()));

export default Store;
