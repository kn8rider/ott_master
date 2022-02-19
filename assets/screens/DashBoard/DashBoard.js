import {
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {Card, Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const data = [
  {icon: 'calendar-month', title: 'Schedule'},
  {icon: 'cellphone-information', title: 'Consultant History'},
  {icon: 'nature-people', title: 'Patient Management'},
  {icon: 'chat-processing', title: 'FreeConsultants 150+ new'},
];
export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      vis: false,
      activeBtn: 2,
    };
  }
  setModalVisible(visible) {
    this.setState({
      vis: visible,
    });
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingHorizontal: 20,
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0=',
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginRight: 10,
                }}
                resizeMode={'cover'}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '700',
                }}>
                Hi Dr,
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '400',
                }}>
                How're you today?
              </Text>
            </View>
            <Card
              style={{
                justifyContent: 'center',
                padding: 10,
                elevation: 30,
                backgroundColor: 'white',
                borderRadius: 15,
                position: 'absolute',
                right: 30,
              }}>
              <Icon name="bell-outline" size={30} color={'red'} />
              <View
                style={{
                  backgroundColor: 'red',
                  borderRadius: 30,
                  justifyContent: 'center',
                  position: 'absolute',
                  top: -15,
                  right: -15,
                  height: 20,
                  width: 20,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                    fontWeight: '400',
                    alignSelf: 'center',
                  }}>
                  3
                </Text>
              </View>
            </Card>
          </View>
          <Searchbar
            style={{
              marginHorizontal: '5%',
              marginTop: '2%',
              borderRadius: 15,
              backgroundColor: '#CCCCCC',
              elevation: 10,
              borderWidth: 1,
              borderColor: '#A4A4A4',
            }}
            placeholder="Search patients, health issue, ..."
            placeholderTextColor={'#474646'}
            value={this.state.search}
            onChangeText={e => this.setState({search: e})}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '5%',
              marginTop: 30,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  color: 'black',
                  fontWeight: '700',
                }}>
                Task{' '}
                <Text
                  style={{
                    fontSize: 25,
                    color: 'black',
                    fontWeight: '400',
                  }}>
                  for today
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                5 of 9 completed
              </Text>
            </View>
            <Card
              style={{
                backgroundColor: 'white',
                elevation: 10,
                justifyContent: 'center',
                borderRadius: 5,
                padding: 20,
                paddingHorizontal: 35,
                marginTop: -10,
              }}>
              <Text
                style={{
                  fontSize: 40,
                  color: '#20A9BA',
                  fontWeight: '500',
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                }}>
                5
              </Text>
            </Card>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              marginTop: 30,
              justifyContent: 'space-evenly',
            }}>
            {data.map((item, index) => (
              <Card
                style={{
                  borderRadius: 10,
                  elevation: 10,
                  height: 170,
                  width: '43%',
                  marginBottom: 20,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                }}
                key={index}
                onPress={() => this.setState({vis: true})}>
                <Icon
                  name={item.icon}
                  size={70}
                  color={'#20A9BA'}
                  style={{alignSelf: 'center', marginTop: 20}}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontSize: 15,
                    color: '#2176E3',
                    maxWidth: '80%',
                    marginTop: 10,
                  }}>
                  {item.title}
                </Text>
              </Card>
            ))}
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.vis}
            onRequestClose={() => {
              this.setModalVisible(false);
            }}>
            <TouchableOpacity
              style={{
                marginTop: '30%',
                backgroundColor: 'white',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                paddingHorizontal: 35,
                paddingBottom: 20,
                width: '100%',
                position: 'absolute',
                bottom: 0,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 10,
              }}
              activeOpacity={1}
              onPressOut={() => this.setModalVisible(false)}>
              <View
                style={{
                  height: 5,
                  width: 50,
                  borderRadius: 20,
                  backgroundColor: '#AEAEAE',
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: 'black',
                  marginTop: 10,
                }}>
                Private Video Call Request
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#EBEAE5',
                  padding: 20,
                  borderRadius: 15,
                  elevation: 10,
                  marginTop: 30,
                }}>
                <View>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA=',
                    }}
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 15,
                      alignSelf: 'center',
                      marginRight: 30,
                    }}
                    resizeMode={'cover'}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: '600',
                    }}>
                    Ethel Howard
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: '400',
                    }}>
                    Female {'   '} 28 years old
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="phone" color={'red'} size={20} />
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: '400',
                        marginLeft: 10,
                      }}>
                      542-430-3167
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                source={require('../../media/countdown.png')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                resizeMode={'cover'}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  alignSelf: 'center',
                  marginVertical: 10,
                  marginTop: 30,
                  fontWeight: '400',
                }}>
                I'm not ready to consult.{' '}
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '400',
                    color: 'black',
                    alignSelf: 'center',
                    marginVertical: 30,
                    textDecorationLine: 'underline',
                  }}>
                  Cancel Request
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  paddingHorizontal: 20,
                  marginTop: 30,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      this.state.activeBtn == 1 ? '#00B9A0' : 'white',
                    borderWidth: 1,
                    borderColor: this.state.activeBtn == 1 ? 'white' : 'grey',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    width: '40%',
                    elevation: 10,
                  }}
                  onPress={() => {
                    this.setState({activeBtn: 1});
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: this.state.activeBtn == 1 ? 'white' : 'grey',
                      fontWeight: this.state.activeBtn == 1 ? '400' : '500',
                    }}>
                    View Detail
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      this.state.activeBtn == 2 ? '#00B9A0' : 'white',

                    borderWidth: 1,
                    borderColor: this.state.activeBtn == 2 ? 'white' : 'grey',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    width: '40%',
                    elevation: 10,
                  }}
                  onPress={() => {
                    this.setState({activeBtn: 2});
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: this.state.activeBtn == 2 ? 'white' : 'grey',
                      fontWeight: this.state.activeBtn == 2 ? '400' : '500',
                    }}>
                    Call Now
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
