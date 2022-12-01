import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  PermissionsAndroid,
  Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
import AppHeader from '../../component/AppHeader';
import {useRoute} from '@react-navigation/native';
import constant from '../../helper/constant';

export default function MapScreen(props) {
  const {container, mapLocationIcon, imageTint} = styles;
  const route = useRoute();

  const mapRef = useRef(null);

  const [mapRefresh, setMapRefresh] = useState(false);

  //Default location now in surat
  const [myLocation, setMyLocation] = useState({
    latitude: 22.3039,
    longitude: 70.8022,
  });
  const [destination, setDestination] = useState({
    latitude: 22.3039,
    longitude: 70.8022,
  });
  const [selectedLocation, setSelectedLocation] = useState('');

  const [initialPosition, setInitialPosition] = useState({
    latitude: myLocation.latitude,
    longitude: myLocation.longitude,
    latitudeDelta: 0.0622,
    longitudeDelta: 0.0121,
  });

  useEffect(() => {
    //Request for get current location
    requestLocationPermission().then(r => console.log(''));
  }, []);

  useEffect(() => {
    if (route?.params?.latitude) {
      //Update selected location
      setDestination({
        latitude: parseFloat(route.params.latitude),
        longitude: parseFloat(route.params.longitude),
      });
      setSelectedLocation(route?.params?.selectedLocation);
    }
  }, [route?.params?.latitude]);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization('whenInUse');
        getCurrentLocation();
      } else {
        const PermissionAndroid = {
          title: 'Location access required',
          message: 'Adoreal Inc want access to your location ',
          buttonNegative: 'Cancel',
          buttonPositive: 'Ok',
        };

        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionAndroid,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        }
      }
    } catch (err) {}
  };

  const getCurrentLocation = () => {
    if (Platform.OS === 'ios') {
    }
    try {
      Geolocation.getCurrentPosition(info => {
        const lat = info.coords.latitude ? info.coords.latitude : 0;
        const long = info.coords.longitude ? info.coords.longitude : 0;
        const initialRegion: any = {
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        const data: any = {
          latitude: lat,
          longitude: long,
        };
        setMyLocation(data);
        setInitialPosition(initialRegion);
        setMapRefresh(!mapRefresh);
      });
    } catch (error) {
      console.log('-error----------', error);
    }
  };

  return (
    <View style={container}>
      <AppHeader headerName={'Map View'} />
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialPosition}
        style={styles.mapView}>
        <MapViewDirections
          origin={myLocation}
          destination={destination}
          apikey={constant.googleMapKey}
          strokeWidth={4}
          strokeColor="#27dd93"
        />

        <Marker coordinate={myLocation}>
          <Image
            source={{uri: 'map_location_icon'}}
            style={[mapLocationIcon, imageTint]}
          />
        </Marker>
        <Marker
          coordinate={destination}
          image={{uri: 'shop_pin'}}
          style={mapLocationIcon}>
          <Callout tooltip>
            <View style={styles.bubble}>
              <View style={styles.subContainer}>
                <Text style={styles.name}>
                  {selectedLocation === '' ? 'Rajkot' : selectedLocation}
                </Text>
              </View>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapLocationIcon: {
    height: 35,
    width: 35,
  },
  imageTint: {
    tintColor: constant.appColor,
  },
  mapView: {
    height: '100%',
    width: '100%',
  },
  customView: {
    width: 140,
    height: 140,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  subContainer: {flex: 1, flexDirection: 'row', width: 150},
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
});
