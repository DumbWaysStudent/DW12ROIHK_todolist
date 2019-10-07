import React, { Component } from 'react';
import { View, StyleSheet, CheckBox} from 'react-native'
import { Container, Icon, Button, Header, Content, List, ListItem, Text, Left, Item, Input, Title, Body} from 'native-base';
export default class ListItemSelectedExample extends Component {
  constructor(props) {
    super(props)

    this.state = {    
      data : 
      [
        {id : 0, value :'work', isChecked:false},
        {id : 1, value :'swim', isChecked:false},
        {id : 2, value :'study', isChecked:false},
        {id : 3, value :'sleep', isChecked:false},
        {id : 4, value :'run', isChecked:false},
      ],
      toDo: '',
      mode: 'Add',
      idx:''
      

    }
  }

  begin(){
    this.setState({toDo:'', mode:'Add',id:''})
  }
  handleAddBtn(){
    if(this.state.mode == 'Add'){
      if(this.state.toDo === ''){
        alert('Masukan Input')
      } else {
        const inText = {id: this.state.data.length, value : this.state.toDo};
        const newData = this.state.data.slice(); 
        newData.push(inText);
        this.setState({data:newData})
        this.setState((data) => (data.toDo))
        this.state.toDo = ''
      }
    }else if(this.state.mode == 'Edit'){
      for(let i = 0; i < this.state.data.length; i++){
        if (this.state.data[i].id == (this.state.idx)){
          const inText = {
            id: this.state.idx,
            value: this.state.toDo,
            isChecked: false
          };
        this.setState((state) => {
          return state.data[i] = inText
        })
      }
    }
  this.begin()
  }
}

  handleRemoveBtn(idx){
    if(this.state.mode == 'Edit'){
      alert('Tidak Bisa Dihapus')
    }else{
      for(let i = 0; i < this.state.data.length; i++){
        if (this.state.data[i].id == (idx)){
          this.setState((state) => {
            const list = state.data.splice(i,1)
            return list
          })
        }
      }
    }
  }
  handleEditBtn(idx){
    this.setState({ toDo : this.state.data[idx].value, mode: 'Edit', idx:idx})
  }

  getIndex(id){
    return this.state.data.findIndex(obj => obj.id === id);
  }
  
  changedCheckbox(id) {
    const idx = this.getIndex(id)
    let check
    this.setState((state)=> {
      if(state.data[idx].isChecked != true){
        check = state.data[idx].isChecked =true
      }else {
        check = state.data[idx].isChecked =false
      
      }
      return check
    })        
  }
  
  render() {
    
    const doubled = this.state.data.map((datas) =>
    <List>
    <ListItem selected>
      <Left>
        <View style={{ flexDirection: 'column'}}>
          <View style={{ flexDirection: 'row' }}>
          <CheckBox
            value={datas.isChecked}
            onValueChange={() => this.changedCheckbox(datas.id)}/>
          </View>
        </View>
        <Text key={datas.id}>{datas.value}</Text>
      </Left>
      <Icon name='create' 
        onPress={() => this.handleEditBtn(datas.id)} />
        <Text>    </Text>     
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
                onChangeText={(text) => this.setState({ toDo: text })}
                placeholder='New ToDo'/>
              <Button small primary 
               onPress={() => this.handleAddBtn()}>
                <Text>{this.state.mode}</Text>
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