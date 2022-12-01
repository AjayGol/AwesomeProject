import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import {fontSizeManage} from '../../helper/app_helper';
import constant from '../../helper/constant';

const AppHeader = props => {
  const {headerContainer, backText, headerTitle, headerTitleText} = styles;
  const {
    headerName,
    headerBgColor,
    headerTextColor,
    barStyle,
    statusBarColor,
    headerStyle,
  } = props;
  return (
    <View
      style={[
        headerContainer,
        {backgroundColor: headerBgColor || constant.appColor},
        headerStyle || {},
      ]}>
      <StatusBar
        backgroundColor={statusBarColor || constant.appColor}
        barStyle={barStyle || 'light-content'}
      />
      <Text style={backText}>{'Back'}</Text>
      <View style={headerTitle}>
        <Text style={[headerTitleText, {color: headerTextColor || '#FFF'}]}>
          {headerName}
        </Text>
      </View>
    </View>
  );
};
export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#27dd93',
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backText: {
    color: '#FFF',
    paddingLeft: 16,
    fontSize: 15,
  },
  headerTitle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.3,
  },
});
