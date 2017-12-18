const initialState = {
	list: [],
    isLoading: true,
    search:"Default Search"
};

export default function(state = initialState, action) {
	if (action.type === "MAIN_FETCH_LIST_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "MAIN_LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
    }
    if (action.type === "MAIN_FETCH_SEARCH_SUCCESS") {
		return {
			...state,
			isLoading: action.list,
		};
    }
    
    
	return state;
}
