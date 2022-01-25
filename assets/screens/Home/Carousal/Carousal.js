import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {Card, Avatar, List} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import SnapCarousal from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SnapCarousal
          data={this.props.data}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item.img}}
              style={{width: '100%', height: '100%', borderRadius: 10}}
              resizeMode="cover"
            />
          )}
          autoplay={true}
          autoplayDelay={100}
          loop={true}
          onSnapToItem={index => this.setState({activeSlide: index})}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={(Dimensions.get('window').width * 70) / 100}
          keyExtractor={(item, ind) => ind}
          firstItem={1}
        />
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {this.props.data.map((item, ind) =>
            this.state.activeSlide === ind ? (
              <Icon
                key={ind}
                name="checkbox-blank-circle"
                size={moderateScale(10)}
                style={{marginHorizontal: 6}}
                color={'#d00000'}
              />
            ) : (
              <Icon
                key={ind}
                name="checkbox-blank-circle"
                size={moderateScale(6)}
                style={{marginHorizontal: 6}}
                color={'#adb5bd'}
              />
            ),
          )}
        </View>
      </View>
    );
  }
}

export default Carousal;
