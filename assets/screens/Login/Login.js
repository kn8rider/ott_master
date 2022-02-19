import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import SnapCarousal from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('window').width;
const offer = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    status: 'In review',
    id: '01',
    genre: 'Action',
    category: 'Bollywood',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Active',
    id: '02',
    genre: 'Romance',
    category: 'Hollywood',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
    genre: 'Horror',
    category: 'Telugu',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Thriller',
    category: 'Tamil',
  },
];
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      activeBtn: 1,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#00B9A0',
        }}>
        <SnapCarousal
          data={offer}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item.img}}
              style={{
                width: '100%',
                height: '60%',
                borderBottomLeftRadius: 50,
              }}
              resizeMode="cover"
            />
          )}
          autoplay={true}
          autoplayDelay={100}
          loop={true}
          onSnapToItem={index => this.setState({activeSlide: index})}
          sliderWidth={width}
          itemWidth={width}
          keyExtractor={(item, ind) => ind}
          firstItem={1}
        />
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -200,
          }}>
          {offer.map((item, ind) =>
            this.state.activeSlide === ind ? (
              <Icon
                key={ind}
                name="checkbox-blank-circle"
                size={10}
                style={{marginHorizontal: 6}}
                color={'white'}
              />
            ) : (
              <Icon
                key={ind}
                name="checkbox-blank-circle"
                size={6}
                style={{marginHorizontal: 6}}
                color={'#adb5bd'}
              />
            ),
          )}
        </View>
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
              backgroundColor: this.state.activeBtn == 1 ? '#00B9A0' : 'white',
              borderWidth: 1,
              borderColor: 'white',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              width: '40%',
              elevation: 10,
            }}
            onPress={() => {
              this.setState({activeBtn: 1});
              this.props.navigation.navigate('DashBoard');
            }}>
            <Text
              style={{
                fontSize: 18,
                color: this.state.activeBtn == 1 ? 'white' : '#00B9A0',
                fontWeight: this.state.activeBtn == 1 ? '400' : '500',
              }}>
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: this.state.activeBtn == 2 ? '#00B9A0' : 'white',

              borderWidth: 1,
              borderColor: 'white',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              width: '40%',
              elevation: 10,
            }}
            onPress={() => {
              this.setState({activeBtn: 2});
              this.props.navigation.navigate('DashBoard');
            }}>
            <Text
              style={{
                fontSize: 18,
                color: this.state.activeBtn == 2 ? 'white' : '#00B9A0',
                fontWeight: this.state.activeBtn == 2 ? '400' : '500',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: 'white',
            alignSelf: 'center',
            marginVertical: 30,
          }}>
          Are you a patient ?{' '}
          <Text
            style={{
              fontSize: 14,
              color: 'white',
              alignSelf: 'center',
              marginVertical: 30,
              textDecorationLine: 'underline',
            }}>
            Get here!
          </Text>
        </Text>
      </View>
    );
  }
}
