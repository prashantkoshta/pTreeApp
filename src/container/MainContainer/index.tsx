import * as React from "react";
import { connect } from "react-redux";
import Main from "../../stories/screens/Main";
import { mainFetchList, mainFetchListData} from "./actions";
import { Platform } from 'react-native';
const API = Platform.OS === 'android'
  ? 'http://localhost:5000/tree/api' // works for Genymotion
  : 'http://localhost:5000/tree/api';


export interface Props {
	navigation: any;
    data: Object;
    search:any;
    mainFetchList: Function;
    mainFetchListData:Function;
}
export interface State {}
class MainContainer extends React.Component<Props, State> {
   
   fetchData = async() => {
       const response = await fetch(`${API}`+"/getMaps");
       const list = await response.json();
       this.props.mainFetchList(list);
   } 

   onSearch = async() => {
        const response = await fetch(`${API}`+"/getMaps");
        const list = await response.json();
        this.props.mainFetchList(list);
    } 

	componentDidMount() {
        // this.props.mainFetchList(datas);
        this.fetchData();
    }
    
	render() {
        return <Main navigation={this.props.navigation} list={this.props.data} mainFetchList={this.onSearch} 
        mainFetchListData = {this.onSearch} />;
	}
}

function bindAction(dispatch) {
	return {
        mainFetchList: url => dispatch(mainFetchList(url)),
        mainFetchListData : str => dispatch(mainFetchListData(str))
	};
}

const mapStateToProps = state => ({
	data: state.mainReducer.list,
	isLoading: state.mainReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(MainContainer);
