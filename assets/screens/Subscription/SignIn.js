import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Card, Avatar, List, Appbar, TextInput} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isActive: true,
    };
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
          padding: 10,
        }}>
        <Appbar style={{backgroundColor: 'black'}}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="AV ShowTime" titleStyle={{color: 'red'}} />
        </Appbar>
        <View style={{height: this.state.isActive ? '20%' : 1}}></View>
        <View style={{marginTop: 10, marginHorizontal: '5%'}}>
          <TextInput
            mode="outlined"
            activeOutlineColor="blue"
            label="Email or phone number"
            value={this.state.email}
            onFocus={() => this.setState({isActive: false})}
            onBlur={() => this.setState({isActive: true})}
            onChangeText={text => this.setState({email: text})}
            outlineColor="white"
            style={{backgroundColor: 'black'}}
            theme={{colors: {placeholder: 'white', text: 'white'}}}
          />
        </View>
        <View style={{marginTop: 10, marginHorizontal: '5%'}}>
          <TextInput
            mode="outlined"
            activeOutlineColor="blue"
            label="Password"
            onFocus={() => this.setState({isActive: false})}
            onBlur={() => this.setState({isActive: true})}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            outlineColor="white"
            style={{backgroundColor: 'black'}}
            theme={{colors: {placeholder: 'white', text: 'white'}}}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            backgroundColor: 'black',
            borderColor: 'white',
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(19),
              fontWeight: '400',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(15),
            fontWeight: '300',
            marginTop: 30,
            marginLeft: 20,
            alignSelf: 'center',
          }}>
          Need help?
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(15),
            fontWeight: '400',
            marginTop: 30,
            marginLeft: 20,
            alignSelf: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Signup')}>
          New to AV ShowTime? Sign up now.
        </Text>
      </SafeAreaView>
    );
  }
}
