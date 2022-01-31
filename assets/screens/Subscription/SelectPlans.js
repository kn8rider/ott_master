import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {Card, Avatar, List, Appbar} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const price = [{prc: '₹ 149'}, {prc: '₹ 199'}, {prc: '₹ 499'}, {prc: '₹ 649'}];
const quality = [{qua: 'Good'}, {qua: 'Good'}, {qua: 'Better'}, {qua: 'Best'}];
const quality2 = [{qua: 'Good'}, {qua: 'Good'}, {qua: 'Better'}];
const resolution = [
  {res: '480p'},
  {res: '480p'},
  {res: '1080p'},
  {res: '4K+HDR'},
];
export default class SelectPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 0,
    };
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
          paddingTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
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
              }}
              onPress={() => this.props.navigation.navigate('Profile')}>
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 10}}
          stickyHeaderIndices={[2]}>
          <View>
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
                marginRight: 40,
              }}>
              <MaterialCommunityIcons
                name="check"
                color={'#1781E7'}
                size={25}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: moderateScale(16),
                  fontWeight: '400',
                  marginLeft: 20,
                }}>
                Watch all you want. Ad-free.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginTop: 10,
                marginRight: 40,
              }}>
              <MaterialCommunityIcons
                name="check"
                color={'#1781E7'}
                size={25}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: moderateScale(16),
                  fontWeight: '400',
                  marginLeft: 20,
                }}>
                Recommendation just for you.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              marginTop: 10,
              marginRight: 40,
            }}>
            <MaterialCommunityIcons name="check" color={'#1781E7'} size={25} />
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(16),
                fontWeight: '400',
                marginLeft: 20,
              }}>
              Change or cancel your plan anytime.
            </Text>
          </View>
          <View style={{paddingBottom: 20, backgroundColor: 'black'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                // marginVertical: 20,
                paddingTop: 20,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F73203',
                  width: '22%',
                  height: 70,
                  borderRadius: 4,
                  marginHorizontal: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                }}
                onPress={() => this.setState({isActive: 0})}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: moderateScale(16),
                    fontWeight: '400',
                  }}>
                  Mobile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F73203',
                  width: '22%',
                  height: 70,
                  borderRadius: 4,
                  marginHorizontal: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                }}
                onPress={() => this.setState({isActive: 1})}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: moderateScale(16),
                    fontWeight: '400',
                  }}>
                  Basic
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F73203',
                  width: '22%',
                  height: 70,
                  borderRadius: 4,
                  marginHorizontal: 3,
                  justifyContent: 'center',
                  elevation: 10,
                  alignItems: 'center',
                }}
                onPress={() => this.setState({isActive: 2})}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: moderateScale(16),
                    fontWeight: '400',
                  }}>
                  Standard
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F73203',
                  width: '22%',
                  height: 70,
                  borderRadius: 4,
                  marginHorizontal: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                }}
                onPress={() => this.setState({isActive: 3})}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: moderateScale(16),
                    fontWeight: '400',
                  }}>
                  Premium
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(14),
              fontWeight: '400',
              alignSelf: 'center',
            }}>
            Monthly price
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 15,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={price}
              renderItem={({item, index, separators}) => (
                <View style={{alignItems: 'center', marginHorizontal: 25}}>
                  <Text
                    style={{
                      color: this.state.isActive == index ? '#1781E7' : 'white',
                      fontSize: moderateScale(14),
                      fontWeight: '400',
                      alignSelf: 'center',
                    }}>
                    {item.prc}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(14),
              fontWeight: '400',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            Video Quality
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-evenly',
              paddingHorizontal: 10,
              marginTop: 15,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={quality}
              renderItem={({item, index, separators}) => (
                <View style={{alignItems: 'center', marginHorizontal: 25}}>
                  <Text
                    style={{
                      color: this.state.isActive == index ? '#1781E7' : 'white',
                      fontSize: moderateScale(14),
                      fontWeight: '400',
                      alignSelf: 'center',
                    }}>
                    {item.qua}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              height: 0.5,
              width: '90%',
              backgroundColor: '#717171',
              alignSelf: 'center',
              marginVertical: 10,
            }}></View>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(14),
              fontWeight: '400',
              alignSelf: 'center',
            }}>
            Resolution
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 15,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={resolution}
              renderItem={({item, index, separators}) => (
                <View style={{alignItems: 'center', marginHorizontal: 23}}>
                  <Text
                    style={{
                      color: this.state.isActive == index ? '#1781E7' : 'white',
                      fontSize: moderateScale(14),
                      fontWeight: '400',
                      alignSelf: 'center',
                    }}>
                    {item.res}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              height: 1,
              width: '90%',
              backgroundColor: '#717171',
              alignSelf: 'center',
              marginVertical: 10,
            }}></View>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(14),
              fontWeight: '400',
              alignSelf: 'center',
            }}>
            Devices you can use to watch
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 15,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={resolution}
              renderItem={({item, index, separators}) => (
                <View style={{marginHorizontal: 25}}>
                  <SimpleLineIcons
                    name="screen-smartphone"
                    color={this.state.isActive == index ? '#1781E7' : '#717171'}
                    size={30}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: moderateScale(11),
                      fontWeight: '300',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    Phone
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 20,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={resolution}
              renderItem={({item, index, separators}) => (
                <View style={{marginHorizontal: 25}}>
                  <SimpleLineIcons
                    name="screen-tablet"
                    color={this.state.isActive == index ? '#1781E7' : '#717171'}
                    size={30}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: moderateScale(11),
                      fontWeight: '300',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    Tablet
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 20,
            }}>
            <View style={{width: 50, marginRight: 20}}></View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={quality2}
              renderItem={({item, index, separators}) => (
                <View style={{marginHorizontal: 18}}>
                  <MaterialCommunityIcons
                    name="laptop"
                    color={
                      this.state.isActive - 1 == index ? '#1781E7' : '#717171'
                    }
                    size={30}
                    style={{marginLeft: 10}}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: moderateScale(11),
                      fontWeight: '300',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    Computer
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 20,
            }}>
            <View style={{width: 50, marginRight: 20}}></View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={quality2}
              renderItem={({item, index, separators}) => (
                <View style={{marginHorizontal: 18}}>
                  <FontAwesome
                    name="tv"
                    color={
                      this.state.isActive - 1 == index ? '#1781E7' : '#717171'
                    }
                    size={30}
                    style={{marginLeft: 10}}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: moderateScale(11),
                      fontWeight: '300',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    TV
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
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
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(17),
                fontWeight: '400',
              }}>
              SEE THE PLANS
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
