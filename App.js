import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native'
import { Container, Icon, Button, Header, Content, List, ListItem, Text, Left, Item, Input} from 'native-base';
export default class ListItemSelectedExample extends Component {
  constructor(props) {
    super(props)

    this.state = {    
      data : 
      [
        {id : 1, value :'work'},
        {id : 2, value :'swim'},
        {id : 3, value :'study'},
        {id : 4, value :'sleep'},
        {id : 5, value :'run'},
      ],
      toDo: ''

    }
  }

  handleAddBtn(){
    if(this.state.toDo === ''){
      alert('Masukan Input')
    } else {
      const inText = {id: this.state.data.length + 1, value : this.state.toDo};
      const newData = this.state.data.slice(); 
      newData.push(inText);
      this.setState({data:newData})
      this.setState((data) => (data.toDo))
    
      this.state.toDo = ''
    }
  }
  
  handleRemoveBtn(idx){
    for(let i = 0; i < this.state.data.length; i++){
      if (this.state.data[i].id == (idx)){
        this.setState((state) => {
          const list = state.data.splice(i,1)
          return list
        })
      }
    }
  }
  
  render() {
    
    const doubled = this.state.data.map((datas, key) =>
    <List>
    <ListItem selected>
      <Left>
        
        <Text key={datas.id}>{datas.value}</Text>
      </Left>
        <Icon name='trash' 
        onPress={() => this.handleRemoveBtn(datas.id)} />     
    </ListItem>
    </List>);
          
    return (
      <Container>
       <Header />
        <Content>
        <View style={styles.form}>
            <Item style={styles.addText}>
              <Input
                value={this.state.toDo}
                onChangeText={(text) => this.setState({ toDo: text })}/>
              <Button small primary 
               onPress={() => this.handleAddBtn()}>
                <Text> Add Todo </Text>
              </Button>
            </Item>            
          </View>
          {doubled}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  addText: {
    marginBottom: 20
  },
})