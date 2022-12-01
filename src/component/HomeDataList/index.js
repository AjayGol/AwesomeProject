import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {fontSizeManage} from '../../helper/app_helper';

const HomeDataList = props => {
  const navigation = useNavigation();
  const {
    listContainer,
    imageView,
    hotelTitle,
    locationContainer,
    directionRowContain,
    rowContainer,
    mapPin,
    ratings,
  } = styles;
  const {listItem} = props;

  const ratingStar = (review = 1) => {
    const arr = [];
    const reviewRating = Math.floor(review);
    for (let i = 0; i < 5; i++) {
      if (i < reviewRating) {
        arr.push(
          <Image
            source={{uri: 'star_fill'}}
            style={ratings}
            resizeMode={'contain'}
          />,
        );
      } else {
        arr.push(
          <Image
            source={{uri: 'star_empty'}}
            style={ratings}
            resizeMode={'contain'}
          />,
        );
      }
    }
    return arr;
  };

  const onPressLocation = (latitude, longitude, title) => {
    navigation.navigate('Map', {
      latitude,
      longitude,
      selectedLocation: title,
    });
  };

  return (
    <TouchableOpacity
      style={listContainer}
      onPress={() =>
        onPressLocation(listItem.latitude, listItem.longitude, listItem?.title)
      }>
      <Image
        source={{uri: 'contain_img'}}
        resizeMode={'stretch'}
        style={imageView}
      />
      <View style={directionRowContain}>
        <View style={styles.leftSpace}>
          <Text style={hotelTitle}>{listItem?.title}</Text>
          <View style={rowContainer}>{ratingStar(listItem.rating)}</View>
        </View>
        <View style={locationContainer}>
          <Image source={{uri: 'map'}} style={mapPin} resizeMode={'contain'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginHorizontal: 13,
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    height: fontSizeManage(50),
    width: fontSizeManage(50),
    borderRadius: 5,
  },
  hotelTitle: {
    fontSize: fontSizeManage(),
    fontWeight: '400',
    flex: 1,
  },
  leftSpace: {
    marginLeft: 16,
    flex: 1,
  },
  locationContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#27dd93',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  directionRowContain: {
    flex: 1,
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  mapPin: {
    height: 20,
    width: 20,
  },
  ratings: {
    height: fontSizeManage(),
    width: fontSizeManage(),
    resizeMode: 'contain',
  },
});

export default HomeDataList;
