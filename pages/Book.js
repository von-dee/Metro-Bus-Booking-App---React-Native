import React from "react";
import { View, StyleSheet, ImageBackground,Text, TouchableOpacity, Image} from "react-native";
import { Icon, Card, Button,Input } from 'react-native-elements';



export default class Book extends React.Component {  

  constructor(props) {
    super(props);
    
    this.state = {
      from: this.props.navigation.getParam('from', 'Accra'),
      destination: this.props.navigation.getParam('destination', 'Kumasi'),
    };
   
  }

  render() {
    return (
        <View style={styles.container}>
          
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 2}}>            
              <Icon iconStyle={[styles.icon,styles.colour_dark]} name='arrow-back' type='ionicons' />
            </View>
            <View style={{flex: 4}} >
              <Text style={styles.camera_text}>Book</Text>
            </View>
            <View style={{flex: 6}} >
            
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 10, flexDirection: 'column'}}>
              <Text style={styles.book_text}>Please read and confirm purchase details.</Text>
            </View>
          </View>

          <View style={{flex: 3, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 10, flexDirection: 'column'}}>
              <Card>
                <Input value={this.props.navigation.getParam('from', 'Accra')}  inputContainerStyle={{borderColor: '#f4f4f4'}} inputStyle={{ fontSize: 14 }} leftIcon={{ type: 'material', name: 'album', size: 10, color: '#cddce8' }}/>
                <Input value={this.props.navigation.getParam('destination', 'Kumasi')}  inputContainerStyle={{borderColor: '#fff'}} inputStyle={{ fontSize: 14 }} leftIcon={{ type: 'material', name: 'album', size: 10, color: '#cddce8' }}/>
              </Card>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 6, flexDirection: 'column'}}>
              <Text style={styles.book_text}>Date</Text>
              <Text style={styles.book_text_h1}>12/12/19</Text>
            </View>
            <View style={{flex: 5, flexDirection: 'column'}}>
              <Text style={styles.book_text}>Fare</Text>
              <Text style={styles.book_text_h1}>GHC 48</Text>
            </View>          
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 6, flexDirection: 'column'}}>
              <Text style={styles.book_text}>Departure</Text>
              <Text style={styles.book_text_h1}>11:00am</Text>
            </View>
            <View style={{flex: 5, flexDirection: 'column'}}>
              <Text style={styles.book_text}>Arrival</Text>
              <Text style={styles.book_text_h1}>4:30am</Text>
            </View>          
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 6, flexDirection: 'column'}}>
              <Text style={styles.book_text}>Seat No.</Text>
              <Text style={styles.book_text_h1}>24</Text>
            </View>
            <View style={{flex: 5, flexDirection: 'column'}}>
            </View>          
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}></View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 4, flexDirection: 'column'}}></View>
            <View style={{flex: 4, flexDirection: 'column'}}>
              <Button
                  backgroundColor='#03A9F4'
                  type="outline"
                  onPress={() => this.props.navigation.navigate('Payment', {
                    from: this.state.from,
                    destination: this.state.destination,
                  })}
                  buttonStyle={{borderRadius: 0, borderColor: '#dbdbdb', marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Confirm' />
            </View> 
            <View style={{flex: 4, flexDirection: 'column'}}></View>
          </View>


          <View style={{flex: 2, flexDirection: 'row'}}>
          
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
  camera_text: {
    fontSize: 18,
    marginTop: 18,
  },
  book_text: {
    fontSize: 12,
    marginLeft: 10,
    color: '#8da1aa',
  },
  book_text_h1: {
    fontSize: 16,
    marginLeft: 10,
    color: '#4e616b',
  },
  icon: {
    marginTop: 16,
    marginLeft: 20,
    width: 40,
    height: 40
  },
  colour_white: {
    color: '#ffffff',
  },
  colour_orange: {
    color: '#9b3a61',
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
    marginTop: 2,
    marginLeft: 10,
    fontSize: 25,
    color: '#000',
  },
  h2: {
    flex:1,
    marginTop: 15,
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  h3: {
    flex:1,
    fontSize: 10,
    marginLeft: 10,
    color: '#000',
  },
  h4: {
    flex:1,
    fontSize: 25,
    marginLeft: 10,
    color: '#000',
    backgroundColor: '#44251d'
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
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },
});