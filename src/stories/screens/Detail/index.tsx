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
  Card,
  CardItem,
  Image,
  Thumbnail
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  item: any;
}

export interface State {}
class Detail extends React.Component<Props, State> {
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

        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'http://localhost:5000/assets/'+this.props.item.imgurl}} /> */}
                <Body>
                  <Text>{this.props.item.title}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <Thumbnail source={{uri: 'http://localhost:5000/assets/'+this.props.item.imgurl}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>{this.props.item.desc}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Right>
                <Button full transparent textStyle={{color: '#87838B'}}>
                  <Text>Donate Now</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Detail;
