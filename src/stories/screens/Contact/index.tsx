import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Contact extends React.Component<Props, State> {

  showContent(){
    if(this.props.list.length>0) {
      let obj:any = this.props.list[0];
      return <Text>{obj.content}</Text>
    }
    return null;
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.goBack()}
              />
              
            </Button>

            {/* <Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button> */}
          </Left>
          <Body>
            <Title>Contact Us</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.showContent()}
        </Content>
      </Container>
    );
  }
}

export default Contact;
