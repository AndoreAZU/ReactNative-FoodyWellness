import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, useSelector, useDispatch} from 'react-redux';

const ItemFood = (props) => {
  const counter = useSelector((state) => state.counter);
  const AllFood = useSelector((state) => state.makanan_pagi);
  const BASE_URL = useSelector((state) => state.base_url);
  const dispacte = useDispatch();

  return (
    <TouchableOpacity onPress={props.button_click}>
      <View style={Styles.wrapperItem}>
        <Image source={props.image} style={Styles.image} />
        <Text style={{textAlign: 'center', paddingVertical: 5}}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  wrapperItem: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 200,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    width: undefined,
    height: undefined,
  },
});
export default connect()(ItemFood);
