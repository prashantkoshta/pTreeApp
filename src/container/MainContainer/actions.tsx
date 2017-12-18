export function mainListIsLoading(bool: boolean) {
	return {
		type: "MAIN_LIST_IS_LOADING",
		isLoading: bool,
	};
}

export function mainFetchListSuccess(list: Object) {
	return {
		type: "MAIN_FETCH_LIST_SUCCESS",
		list,
	};
}

export function mainFetchSearchSuccess(search: any) {
	return {
		type: "MAIN_FETCH_SEARCH_SUCCESS",
		search,
	};
}



export function mainFetchList(url) {
	return dispatch => {
		dispatch(mainFetchListSuccess(url));
		dispatch(mainListIsLoading(false));
	};
}



export function mainFetchListData(search) {
	return dispatch => {
		dispatch(mainFetchSearchSuccess(search));
	};
}

