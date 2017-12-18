const initialState = {
	item:{},
  isLoading: true
};

export default function(state = initialState, action) {
	if (action.type === "DT_FETCH_LIST_SUCCESS") {
		return {
			...state,
			item: action.item,
		};
	}
	if (action.type === "DT_LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
    }
	return state;
}
