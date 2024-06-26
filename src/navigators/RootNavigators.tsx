import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';



const Tab = createBottomTabNavigator();
function Main() {
    const CustomTabBarButton = ({ children }) => {
      return (
        <TouchableOpacity
          style={{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 32,
            justifyContent: "center",
            marginTop: -8,
            alignItems: "center",
            backgroundColor: "#5C3EBC",
            width: 55,
            height: 55,
          }}
        >
          <Entypo name="list" size={32} color="#FFD00C" />
        </TouchableOpacity>
      );
    };
  
  return (
    <Tab.Navigator
      initialRouteName="AnaSayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
      >
        <Tab.Screen 
          name="Anasayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
         <Tab.Screen
          name="Bildirimler"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sat"
          component={HomeNavigator}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
          <Tab.Screen
          name="Sohbet"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
          
        />
        <Tab.Screen
          name="İlanlarım"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />            ),
          }}
        />

      </Tab.Navigator>
  );
}

export default Main;
