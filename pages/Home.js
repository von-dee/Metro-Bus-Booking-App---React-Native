import React from 'react';

import {  AppRegistry, StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity, Modal, TouchableHighlight, Alert} from 'react-native';
import { Icon, Card, Button,Input, ListItem } from 'react-native-elements';


import apicalls from '../api_calls/api_calls';

const list = [
  {
    title: 'Accra',
    icon: 'map'
  },
  {
    title: 'Kumasi',
    icon: 'map'
  }
]

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      modalVisible: false,
      modalAction: '',
      from: 'From',
      destination: 'Destination',
      terminals: [{
        TERMINAL_NAME: 'Accra',
        icon: 'map'
      },
      {
        TERMINAL_NAME: 'Kumasi',
        icon: 'map'
      }]
    };
   
  }

  componentDidMount() {
      const data = {
          actions: 'get_terminals'
        }        

      messages_gotten = apicalls.getdata(data).then(data => {
          var got = data;            
          console.log("gotten ",got);
          this.setState({terminals: got});
          
        })        
        
    }

   handleSubmit() {

    const data = {
      actions: 'get_bus_availability',
      from: this.state.from,
      destination: this.state.destination,
    }        

    messages_gotten = apicalls.getdata(data).then(data => {
      var got = data;            
      console.log("gotten ",got);


      if( got != [] || got != null){

        if(got[0].TRIP_STATUS == "1"){
          this.props.navigation.navigate('Book', {
            from: this.state.from,
            destination: this.state.destination,
          })
        }else{
          this.showalert("Bus is not Available");
        }
        
      }else if( got == "not available" ){
        this.showalert("Bus is not Available");
      }else{
         this.showalert("Bus is not Available");
      }
    })     
    

  }


    showalert(msg){
    Alert.alert(
      'Sorry',
      msg,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  componentWillUnmount() {

  }

  setModalVisible(visible,action) {
    this.setState({modalVisible: visible});
    this.setState({modalAction: action});
  }

  setLocation(location) {
    if(this.state.modalAction == "From"){
      this.setState({from: location});
    }else if(this.state.modalAction == "Destination"){
      this.setState({destination: location});
    }else{
    }
    this.setModalVisible(!this.state.modalVisible);
  }


  render() {
    
    return (
          <View style={styles.container}>

          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Icon iconStyle={[styles.icon,styles.colour_blue]} name='close' type='font-awesome' />
                </TouchableHighlight>           
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}></View>
              <View style={{flex: 4}} >
                <Text style={styles.modal_text1}>{this.state.modalAction}</Text>
              </View>
              <View style={{flex: 7}} ></View>
            </View>
            <View style={{flex: 10, flexDirection: 'row'}}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 11}} >
                  <View>
                    {
                      this.state.terminals.map((item, i) => (
                        <ListItem
                          key={i}
                          title={item.TERMINAL_NAME}
                          leftIcon={{ name: 'map', color: '#cddce8' }}
                          type="font-awesome"
                          containerStyle={{borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5}}
                          onPress={() => {
                            this.setLocation(item.TERMINAL_NAME);
                          }}
                        />
                      ))
                    }
                  </View>
                </View>
            </View>
          </View>
        </Modal>


            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>            
                <Icon iconStyle={[styles.icon,styles.colour_dark]} name='short-text' type='material' />
              </View>
              <View style={{flex: 7}} >
              </View>
              <View style={{flex: 2}} >
                <TouchableOpacity style={{alignItems: 'center'}} onPress={() =>
                      this.props.navigation.navigate('Home')}>
                  <Icon iconStyle={[styles.icon,styles.colour_orange]} name='bell' type='font-awesome' />
                </TouchableOpacity>    
              </View>
              <View style={{flex: 2}} >
                <TouchableOpacity style={{alignItems: 'center'}} onPress={() =>
                    this.props.navigation.navigate('Tickets')}>
                    <Text style={styles.camera_text}>Tickets</Text>
                </TouchableOpacity>                
              </View>
            </View>

            <View style={{flex: 2, flexDirection: 'row'}}>
              <Image source={require('./../assets/metrologo.png')} style={{flex:8, height: 100, width: 100}} resizeMode="contain"/>
            </View>

            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column'}}></View>
              <View style={{flex: 10, flexDirection: 'column'}}>
                <Card>
                  <Button
                    icon={
                      <Icon
                        name="album"
                        size={15}
                        color="#cddce8"
                        type="material"
                        iconStyle={{fontSize: 10}}
                      />
                    }
                    iconLeft
                    buttonStyle={{marginTop: 10, justifyContent: 'flex-start', borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5}}
                    titleStyle={{fontSize: 15, color: '#afafaf', marginLeft: 6}}
                    type="clear"
                    title= {this.state.from}
                    onPress={() => {this.setModalVisible(true,'From'); }}
                  />

                  <Button
                    icon={
                      <Icon
                        name="album"
                        size={15}
                        color="#cddce8"
                        type="material"
                        iconStyle={{fontSize: 10}}
                      />
                    }
                    iconLeft
                    buttonStyle={{marginTop: 2, justifyContent: 'flex-start'}}
                    titleStyle={{fontSize: 15, color: '#afafaf', marginLeft: 6}}
                    type="clear"
                    title={this.state.destination}
                    onPress={() => {this.setModalVisible(true,'Destination'); }}
                  />
                </Card>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}></View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 4, flexDirection: 'column'}}></View>
              <View style={{flex: 4, flexDirection: 'column'}}>
                <Button
                    backgroundColor='#03A9F4'
                    type="outline"
                    onPress={() => {
                      this.handleSubmit();
                    }}
                    buttonStyle={{borderRadius: 0, borderColor: '#dbdbdb', marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Book' />
              </View> 
              <View style={{flex: 4, flexDirection: 'column'}}></View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}></View>

            <View style={{flex: 3, flexDirection: 'row'}}>
              <ImageBackground source={require('./../assets/busrun.png')} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
            {/* <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Text>Show Modal</Text>
            </TouchableHighlight> */}
            </View>
            
          </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  margintop_: {
    marginTop: 3,
  },
  camera_text: {
    fontSize: 12,
    marginTop: 18,
  },
  modal_text1: {
    fontSize: 18,
  },
  icon: {
    marginTop: 13,
    marginLeft: 20,
    width: 40,
    height: 40
  },
  colour_white: {
    color: '#ffffff',
  },
  colour_orange: {
    color: '#2cbb77',
  },
  colour_blue: {
    color: '#cddce8',
  },
  colour_green: {
    color: '#635674',
  },
  iconplus: {
    marginTop: 14,
    marginLeft: 20,
    fontSize: 42,
    width: 70,
    height: 70,
    color: '#10561a',
  },
  h1: {
    flex:1,
    fontSize: 20,
    color: '#fff',
  },
  h2: {
    flex:1,
    fontSize: 14,
    color: '#e2bfaf',
  },
  h3: {
    flex:1,
    fontSize: 12,
    color: '#fff',
  },
  h4: {
    flex:1,
    marginLeft: 3,
    fontSize: 25,
    color: '#ffffff',
    backgroundColor: '#230e0a'
  },
  icon_style: {
    marginBottom: 8,
  },
  button_style_me: {
    marginRight: 30,
    marginBottom: 20,
  },
  button_textstyle_me: {
    flex:1,
    fontSize: 15,
    textAlign: 'right',
    marginRight: 10,
    color: '#0e662d',
  },
});

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);