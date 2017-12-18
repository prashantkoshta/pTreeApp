import * as React from "react";
import { connect } from "react-redux";
import Detail from "../../stories/screens/Detail";
import { dtFetchList } from "./actions";
import { Platform } from 'react-native';
const API = Platform.OS === 'android'
    ? 'http://localhost:5000/tree/api' // works for Genymotion
    : 'http://localhost:5000/tree/api';


export interface Props {
    navigation: any;
    data: Object;
    dtFetchList: Function;
}
export interface State { }
class DetailContainer extends React.Component<Props, State> {

    fetchData = async () => {
        const response = await fetch(`${API}` + "/getTree/1/1");
        const item = await response.json();
        this.props.dtFetchList(item);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <Detail navigation={this.props.navigation} item={this.props.data} />;
    }
}

function bindAction(dispatch) {
    return {
        dtFetchList: url => dispatch(dtFetchList(url)),
    };
}

const mapStateToProps = state => ({
    data: state.detailReducer.item,
    isLoading: state.detailReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(DetailContainer);
