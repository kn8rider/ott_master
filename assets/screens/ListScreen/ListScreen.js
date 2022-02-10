import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {
  Card,
  Avatar,
  List,
  Appbar,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const offer = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    status: 'In review',
    id: '01',
    genre: 'Action',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Active',
    id: '02',
    genre: 'Romance',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
    genre: 'Horror',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Thriller',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Drama',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Animation',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Comedy',
  },
];
export class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props.route.params.header);
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <Appbar style={{backgroundColor: '#02B1D5'}}>
          <Icon
            name={'arrow-left'}
            size={30}
            color={'white'}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: '400',
              fontSize: moderateScale(18),
              marginLeft: 20,
            }}>
            {this.props.route.params.header}
          </Text>
        </Appbar>
        <SafeAreaView style={{paddingHorizontal: '1%', flex: 1}}>
          <FlatList
            showVerticleIndicator={false}
            data={this.props.route.params.data}
            columnWrapperStyle={{justifyContent: 'space-evenly', flex: 1}}
            numColumns={3}
            renderItem={({item, index, separators}) => (
              <Card
                onPress={() => {
                  this.props.navigation.navigate('MovieScreen');
                }}
                style={{
                  marginHorizontal: '1%',
                  height: 150,
                  borderRadius: 10,
                  elevation: 10,
                  width: '32%',
                  marginTop: 10,
                }}>
                <Image
                  source={{uri: item.img}}
                  style={{
                    width: '100%',
                    height: 150,
                    borderRadius: 10,
                  }}
                  resizeMode={'cover'}
                />
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#010048',
                    top: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    borderTopRightRadius: 20,
                    alignItems: 'center',
                    borderBottomRightRadius: 20,
                    padding: 2,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '500',
                      fontSize: moderateScale(10),
                    }}>
                    135M+
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '400',
                      fontSize: moderateScale(8),
                      marginLeft: 2,
                    }}>
                    VIEWS
                  </Text>
                </View>
              </Card>
            )}
            keyExtractor={(item, ind) => ind}
          />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default ListScreen;
