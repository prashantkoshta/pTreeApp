export function dtListIsLoading(bool: boolean) {
	return {
		type: "DT_LIST_IS_LOADING",
		isLoading: bool,
	};
}

export function dtFetchListSuccess(item: Object) {
	return {
		type: "DT_FETCH_LIST_SUCCESS",
		item,
	};
}

export function dtFetchList(url) {
	return dispatch => {
		dispatch(dtFetchListSuccess(url));
		dispatch(dtListIsLoading(false));
	};
}
