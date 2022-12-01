import {Dimensions, Platform} from 'react-native';

const constant = {
  appName: 'Test',
  testUser: 'test@gmail.com',
  /** iphone and android condition */
  isIphoneX: Platform.OS === 'ios' && Dimensions.get('window').height === 812,
  isIOS: Platform.OS === 'ios',
  isiPAD:
    Dimensions.get('window').height / Dimensions.get('window').width < 1.6,
  isIpad:
    Dimensions.get('window').width > 400 &&
    Dimensions.get('window').height / Dimensions.get('window').width < 1.6,
  isANDROID: Platform.OS === 'android',
  screenWidth: Dimensions.get('window').width,

  googleMapKey: 'AIzaSyAsmL8hCP--dUDxv64z8WPveh22WPa7M70',
  appColor: '#27dd93',
};
export default constant;
