import React from 'react';
import { Container, Header, Title, Body, Content, Item, Icon, Input } from 'native-base';
import CardList from './CardList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: ""
    };
  }

  render() {
    const {searchfield} = this.state;

    return (
      <Container style={{ backgroundColor: "snow"}}>
        <Header style={{ backgroundColor: "lightyellow"}}>
          <Body>
            <Title style={{ fontSize: 50}}>Meaow</Title>
          </Body>
        </Header>
        <Item>
          <Icon active name="search" />
          <Input placeholder="Search for cat breeds" 
            onChangeText={(searchfield) => this.setState({searchfield})}
          />
        </Item>
        <Content>
          <CardList searchfield={searchfield}/>
        </Content>
      </Container>
    );
  }
}