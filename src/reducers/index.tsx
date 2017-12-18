import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import mainReducer from "../container/MainContainer/reducer";
import contactReducer from "../container/ContactContainer/reducer";
import layoutReducer from "../container/LayoutContainer/reducer";
import detailReducer from "../container/DetailContainer/reducer";

export default combineReducers({
	form: formReducer,
	homeReducer,
	mainReducer,
	contactReducer,
	layoutReducer,
	detailReducer
});
