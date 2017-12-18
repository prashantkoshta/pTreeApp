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
  Thumbnail
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}

export interface State {}
class Layout extends React.Component<Props, State> {
  render() {
    const param = this.props.navigation.state.params;
    return (
      <Container style={styles.container}>
        <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>{param ? param.name : "Blank Page"}</Title>
        </Body>
        <Right />
      </Header>
        <Content>
          <List>
            {this.props.list.map((item) => (
              <ListItem
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("Detail", {
                    name: item.title
                  })}
              >
               <Thumbnail source={{uri: 'http://localhost:5000/assets/'+item.imgurl}} />
                <Text>{item.title} - {item.imgurl}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Layout;
