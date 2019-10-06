import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left} from 'native-base';
export default class ListItemSelectedExample extends Component {
  constructor(props) {
    super(props)

    this.state = {    
      numbers : 
      [
        'work',
        'swim',
        'study',
        'sleep',
        'run'
      ]
    }
  }
  render() {
    
    
    const doubled = this.state.numbers.map((number) =>
    <List>
    <ListItem selected>
      <Left>
        <Text>{number}</Text>
      </Left>
    </ListItem>
    </List>);
          
    return (
      <Container>
        <Header />
        <Content>{doubled}</Content>
      </Container>
    );
  }
}