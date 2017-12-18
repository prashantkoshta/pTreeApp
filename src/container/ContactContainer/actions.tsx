export function cListIsLoading(bool: boolean) {
	return {
		type: "C_LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function cFetchListSuccess(list: Object) {
	return {
		type: "C_FETCH_LIST_SUCCESS",
		list,
	};
}
export function cFetchList(url) {
	return dispatch => {
		dispatch(cFetchListSuccess(url));
		dispatch(cListIsLoading(false));
	};
}
