import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import SnapCarousal from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
const width = Dimensions.get('window').width;
const offer = [
  {
    img: 'https://media.istockphoto.com/photos/pediatrician-talks-with-patients-mother-picture-id1293681788?b=1&k=20&m=1293681788&s=170667a&w=0&h=86FIfZB_E9W0-1olORv2I6P5Fvd6EUMZUVPyiMfVrAY=',
    id: '01',
  },
  {
    img: 'https://media.istockphoto.com/photos/happy-doctor-and-senior-patient-use-tablet-at-consultation-picture-id1294678917?b=1&k=20&m=1294678917&s=170667a&w=0&h=QM9PVw4Q4gVmcOqHQ2W53RTDdZoklbtaqxsLpMYWJZI=',
    id: '02',
  },
  {
    img: 'https://media.istockphoto.com/photos/experienced-middle-aged-family-doctor-showing-analysis-results-on-picture-id1315185719?b=1&k=20&m=1315185719&s=170667a&w=0&h=sBD8o7tF9gdoyPqbJBkuVTb_keofWtvbE161hQoP2Yk=',
    id: '03',
  },
  {
    img: 'https://media.istockphoto.com/photos/have-a-look-at-your-bloodwork-results-picture-id1293814791?b=1&k=20&m=1293814791&s=170667a&w=0&h=dmgTyHyOOuYE2NnjGFtyE-Ynx7OPGjOpG1xPwcZgots=',
    id: '06',
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
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  componentWillUnmount() {
    StatusBar.setHidden(false);
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
                flex: 1,
                // width: '100%',
                // height: '70%',
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
            marginTop: 20,
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
