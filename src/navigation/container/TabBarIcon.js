import React from 'react';
import {View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function TabBarIcon(props) {
  const {
    tabName,
    marginLeft,
    focused,
    tintColor = focused ? '#27dd93' : '#292D38',
  } = props;

  return (
    <View>
      <Entypo name={tabName} size={24} color={tintColor} />
    </View>
  );
}

export default TabBarIcon;
