import { createStore } from "redux";
import { cartreducer } from "./redux/reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
    cartreducer,
    composeWithDevTools()
) 

export default store;