import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { getUserInfo } from './../redux/creators';
import GetAllInfoFromServer from './../components/GetAllInfoFromServer';

const HomeScreen = props => {
  const { userInfo, navigation } = props;
  return (
    <View style={styles.mainContainer}>
      {/* empty component that runs all the redux thunks */}
      <GetAllInfoFromServer />
      <View>
        <Text>Home Screen</Text>
        {/* <Text>Welcome {userInfo.name}</Text> */}
      </View>
      <View>
        <Button onPress={() => navigation.navigate('Chores')}>
          <Text>Chores</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    flex: 1,
  },
});

const mapState = ({ userInfo }) => ({ userInfo });
const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getUserInfo()),
  };
};
export default connect(
  mapState,
  mapDispatch,
)(HomeScreen);
