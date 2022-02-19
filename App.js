import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import Search from './assets/screens/Search/Search';
import Profile from './assets/screens/Profile/Profile';
import Login from './assets/screens/Login/Login';
import DashBoard from './assets/screens/DashBoard/DashBoard';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          elevation: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Main': {
              iconName = focused ? 'magnify' : 'magnify';
              break;
            }
            case 'Search': {
              iconName = focused
                ? 'chat-processing'
                : 'chat-processing-outline';
              break;
            }
            case 'Favourites': {
              iconName = focused ? 'notebook' : 'notebook-outline';
              break;
            }
            case 'Add': {
              iconName = focused ? 'briefcase-plus' : 'briefcase-plus-outline';
              break;
            }
            case 'Profile': {
              iconName = focused ? 'account' : 'account-outline';
              break;
            }
            default: {
              iconName = focused ? 'beaker' : 'beaker';
              break;
            }
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={35}
              color={color}
              style={{
                backgroundColor: focused ? '#BBDABB' : 'white',
                padding: 5,
                borderRadius: 15,
              }}
            />
          );
        },
        tabBarActiveTintColor: '#20A9BA',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
      })}>
      <Tab.Screen
        name="Main"
        component={DashBoard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourites"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Add"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Continue">
          <Stack.Screen
            name="DashBoard"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Continue"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
