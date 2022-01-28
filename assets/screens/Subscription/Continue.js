import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Card, Avatar, List, Appbar} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class Continue extends Component {
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
              color: 'red',
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
        <View
          style={{
            flexDirection: 'row',
            marginTop: '40%',
            alignItems: 'baseline',
          }}>
          <FontAwesome
            name="laptop"
            color={'red'}
            size={60}
            style={{marginRight: 20, marginLeft: 20}}
          />
          <FontAwesome
            name="tv"
            color={'red'}
            size={80}
            style={{marginRight: 10}}
          />
          <SimpleLineIcons name="screen-smartphone" color={'red'} size={80} />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(14),
            fontWeight: '400',
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
            marginTop: 5,
            marginLeft: 20,
          }}>
          Set up your account
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(15),
            fontWeight: '400',
            marginTop: 20,
            marginLeft: 20,
          }}>
          AV ShowTime is personalized for you. Use your email and create a
          password to watch AV ShowTime om any device at any time.
        </Text>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 40,
            backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Signup')}>
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
