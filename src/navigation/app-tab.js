import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';
import MapScreen from '../screen/map';
import {connect} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {fontManage, fontSizeManage} from '../helper/app_helper';

const Tab = createBottomTabNavigator();

function MyTabs(obj) {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      // screenOptions={{
      //   headerShown: false,
      // }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Map') {
            iconName = 'map';
          }

          // You can return any component that you like here!
          return (
            <Entypo
              name={iconName}
              size={fontSizeManage(24)}
              color={focused ? '#27dd93' : '#999999'}
            />
          );
        },
        tabBarActiveTintColor: '#27dd93',
        tabBarInactiveTintColor: '#999999',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabelStyle: {
            ...fontManage('default'),
          },
          tabBarOnPress: ({navigation, defaultHandler}) => {
            return defaultHandler();
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarLabelStyle: {
            ...fontManage('default'),
          },
          tabBarOnPress: ({navigation, defaultHandler}) => {
            return defaultHandler();
          },
        }}
      />
    </Tab.Navigator>
  );
}

function AppTab(props) {
  const {container} = styles;

  return (
    <View style={container}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(AppTab);
