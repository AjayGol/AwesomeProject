import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {homeScreenAPI, loadMoreData} from '../../modules/account/actions';
import {connect} from 'react-redux';
import AppHeader from '../../component/AppHeader/index';
import HomeDataList from '../../component/HomeDataList/index';

function HomeScreen(props) {
  const {container, topSpace} = styles;

  useEffect(() => {
    homeListApi();
  }, []);

  const homeListApi = () => {
    props
      ?.homeScreenAPI()
      .then(res => {})
      .catch(err => {
        console.log(err, '===Err in Home API');
      });
  };

  const onEndReached = () => {
    props
      .loadMoreData(props?.homeList)
      .then(res => {})
      .catch(err => {
        console.log(err, '===Err in Pagination');
      });
  };

  const renderItem = ({item, index}) => {
    return <HomeDataList listItem={item} />;
  };

  const renderFooterItem = () => {
    return (
      <>
        <ActivityIndicator size="small" color={'#000'} />
      </>
    );
  };

  return (
    <View style={container}>
      <AppHeader headerName={'Restaurant List'} />
      <FlatList
        data={props?.homeList || []}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        contentContainerStyle={topSpace}
        onEndReached={onEndReached}
        ListFooterComponent={renderFooterItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSpace: {
    paddingTop: 10,
  },
});

const mapStatToProps = state => {
  return {
    homeList: state?.account?.homeList || [],
  };
};

export default connect(mapStatToProps, {homeScreenAPI, loadMoreData})(
  HomeScreen,
);
