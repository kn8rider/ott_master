import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Card, Avatar, List, Appbar, TextInput} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class Signup extends Component {
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#1781E7',
              fontSize: moderateScale(23),
              fontWeight: '600',
            }}>
            AV ShowTime
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '35%',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(14),
                fontWeight: '300',
              }}>
              HELP
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(14),
                fontWeight: '300',
              }}
              onPress={() => this.props.navigation.navigate('SignIn')}>
              SIGN IN
            </Text>
          </View>
        </View>
        <View style={{height: this.state.isActive ? 200 : 1}}>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(14),
              fontWeight: '300',
              marginTop: 30,
              marginLeft: 20,
            }}>
            STEP 1 OF 3
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(19),
              fontWeight: '600',
              marginLeft: 20,
            }}>
            Enter your email and password to start your membership
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(15),
              fontWeight: '300',
              marginTop: 20,
              marginLeft: 20,
            }}>
            Just two more steps and you're done!
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(15),
              fontWeight: '300',
              marginLeft: 20,
            }}>
            We hate paperwork, too.
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(17),
              fontWeight: '400',
              marginLeft: 20,
              marginTop: 10,
            }}>
            Create your account
          </Text>
        </View>
        <View style={{marginTop: 10, marginHorizontal: '5%'}}>
          <TextInput
            mode="outlined"
            activeOutlineColor="blue"
            label="Email"
            value={this.state.email}
            onFocus={() => this.setState({isActive: false})}
            onBlur={() => this.setState({isActive: true})}
            onChangeText={text => this.setState({email: text})}
            outlineColor="white"
            style={{backgroundColor: 'black'}}
            theme={{
              colors: {
                placeholder: 'white',
                text: 'white',
              },
            }}
          />
        </View>
        <View style={{marginTop: 10, marginHorizontal: '5%'}}>
          <TextInput
            mode="outlined"
            activeOutlineColor="blue"
            label="Password"
            value={this.state.password}
            onFocus={() => this.setState({isActive: false})}
            onBlur={() => this.setState({isActive: true})}
            onChangeText={text => this.setState({password: text})}
            outlineColor="white"
            style={{backgroundColor: 'black'}}
            theme={{colors: {placeholder: 'white', text: 'white'}}}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 40,
            backgroundColor: '#1781E7',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Plans')}>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(19),
              fontWeight: '500',
            }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
