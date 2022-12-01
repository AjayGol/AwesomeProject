import React from 'react';
import constant from '../../helper/constant';
import {Text} from 'react-native';

function TabBarLabel(props) {
  const {tabName, color = 'red'} = props;

  return <Text style={{color: '#000000'}}>{tabName}</Text>;
}

export default TabBarLabel;
