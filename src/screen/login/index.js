import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {fontManage, validatorEmail} from '../../helper/app_helper';
import {useNavigation} from '@react-navigation/native';
import {UserStack} from '../../navigation/navigator';
import AppHeader from '../../component/AppHeader';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    inputView,
    container,
    TextInputContainer,
    loginBtnContainer,
    loginText,
    subContain,
    headerCustomStyle,
  } = styles;
  const navigation: any = useNavigation();

  const onPressLogin = () => {
    if (email === '' && password === '') {
      alert('Please enter detail');
    } else if (email === '') {
      alert('Please enter email address');
    } else if (!validatorEmail(email)) {
      alert('Please enter valid email address');
    } else if (password === '') {
      alert('Please enter password address');
    } else {
      if (
        email.toLowerCase() === 'ajay@gmail.com' &&
        password === '123'
      ) {
        navigation.navigate(UserStack.tabBar);
      } else {
        alert('your record not found');
      }
    }
  };

  return (
    <View style={container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <AppHeader
        headerBgColor={'#FFF'}
        headerName={'Login'}
        isHideBack={false}
        headerTextColor={'#000'}
        barStyle={'dark-content'}
        statusBarColor={'#FFF'}
        headerStyle={headerCustomStyle}
      />
      <View style={subContain}>
        <View style={inputView}>
          <TextInput
            value={email}
            style={[TextInputContainer, fontManage()]}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            value={password}
            style={[TextInputContainer, fontManage()]}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={loginBtnContainer} onPress={onPressLogin}>
          <Text style={[loginText, fontManage('bold')]}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  subContain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  TextInputContainer: {},
  loginBtnContainer: {
    width: '100%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
    elevation: 5,
  },
  loginText: {
    fontSize: 15,
  },
  headerCustomStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
});
