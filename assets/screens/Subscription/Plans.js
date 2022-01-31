import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Card, Avatar, List, Appbar} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Plans extends Component {
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
        <View
          style={{
            marginTop: '40%',
            marginLeft: 20,
          }}>
          <MaterialCommunityIcons
            name="check-circle-outline"
            color={'#1781E7'}
            size={50}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(14),
            fontWeight: '400',
            marginTop: 20,
            marginLeft: 20,
          }}>
          STEP 2 OF 3
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(20),
            fontWeight: '500',
            marginTop: 5,
            marginLeft: 20,
          }}>
          Choose your plan
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 10,
            marginRight: 20,
          }}>
          <MaterialCommunityIcons name="check" color={'#1781E7'} size={25} />
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(16),
              fontWeight: '400',
              marginLeft: 20,
            }}>
            No commitments, cancel anytime.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 10,
            marginRight: 20,
          }}>
          <MaterialCommunityIcons name="check" color={'#1781E7'} size={25} />
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(16),
              fontWeight: '400',
              marginLeft: 20,
            }}>
            Everything on AV ShowTime for one low price.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 10,
            marginRight: 20,
          }}>
          <MaterialCommunityIcons name="check" color={'#1781E7'} size={25} />
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(16),
              fontWeight: '400',
              marginLeft: 20,
            }}>
            No ads and no extra fees. Ever.
          </Text>
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
          onPress={() => this.props.navigation.navigate('SelectPlans')}>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(17),
              fontWeight: '400',
            }}>
            SEE THE PLANS
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
