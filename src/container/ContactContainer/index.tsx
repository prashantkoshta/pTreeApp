import * as React from "react";
import { connect } from "react-redux";
import Contact from "../../stories/screens/Contact";
import datas from "./data";
import { cFetchList } from "./actions";
export interface Props {
	navigation: any;
	cFetchList: Function;
	data: Object;
}
export interface State {}
class ContactContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.cFetchList(datas);
	}
	render() {
		return <Contact navigation={this.props.navigation} list={this.props.data} />;
	}
}

function bindAction(dispatch) {
	return {
		cFetchList: url => dispatch(cFetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.contactReducer.list,
	isLoading: state.contactReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(ContactContainer);