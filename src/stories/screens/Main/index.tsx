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
  ListItem,
  Item,
  Input
} from "native-base";

import styles from "./styles";
import { View } from "react-native";
export interface Props {
  navigation: any;
  list: any;
  mainFetchList:Function;
  mainFetchListData:Function;
}

export interface State {}
class Main extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Main</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            {/* {this.props.searchForm} */}
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Enter Zipcode"
               onChangeText={(value) => {this.props.mainFetchListData(value)}} />
            </Item>
          </View>
          
          <List>
            {this.props.list.map((item) => (
              <ListItem
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("Layout", {
                    name: item.label
                  })}
              >
                <Text>{item.label}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Main;
