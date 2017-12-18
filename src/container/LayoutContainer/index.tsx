import * as React from "react";
import { connect } from "react-redux";
import Layout from "../../stories/screens/Layout";
import { lyFetchList } from "./actions";
import { Platform } from 'react-native';
const API = Platform.OS === 'android'
    ? 'http://localhost:5000/tree/api' // works for Genymotion
    : 'http://localhost:5000/tree/api';


export interface Props {
    navigation: any;
    data: Object;
    lyFetchList: Function;
}
export interface State { }
class LayoutContainer extends React.Component<Props, State> {

    fetchData = async () => {
        const response = await fetch(`${API}` + "/getLayout/1");
        const list = await response.json();
        this.props.lyFetchList(list);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <Layout navigation={this.props.navigation} list={this.props.data} />;
    }
}

function bindAction(dispatch) {
    return {
        lyFetchList: url => dispatch(lyFetchList(url)),
    };
}

const mapStateToProps = state => ({
    data: state.layoutReducer.list,
    isLoading: state.layoutReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(LayoutContainer);
