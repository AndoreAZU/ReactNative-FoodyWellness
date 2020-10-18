import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, Image, View, ActivityIndicator} from 'react-native';
import logoFoody from '../../../assets/image/logo_foody_wellness.png';
import {connect, useDispatch} from 'react-redux';

const Splash = ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://cookygroup.herokuapp.com/subscription/getAllMakanan', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        dispatch({type: 'ADD_FOOD', value : responseJSON.data});
        console.log('Get All Food');
        console.log(responseJSON);
        navigation.replace('Foody Wellness');
      })
      .catch((error) => {
        console.error(error);
      });
    // setTimeout(() => {
    //   navigation.replace('Foody Wellness');
    // }, 2000);
  }, []);

  return (
    <View style={Styles.container}>
      <View>
        <Image source={logoFoody} style={Styles.image} />
      </View>
      <View style={Styles.wrapperText}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{marginLeft: 10}}>Foody Wellness V1.1</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },
  image: {
    width: 500,
    height: 500,
  },
  wrapperText: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default connect()(Splash);
