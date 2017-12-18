export function lyListIsLoading(bool: boolean) {
	return {
		type: "LY_LIST_IS_LOADING",
		isLoading: bool,
	};
}

export function lyFetchListSuccess(list: Object) {
	return {
		type: "LY_FETCH_LIST_SUCCESS",
		list,
	};
}


export function lyFetchList(url) {
	return dispatch => {
		dispatch(lyFetchListSuccess(url));
		dispatch(lyListIsLoading(false));
	};
}


