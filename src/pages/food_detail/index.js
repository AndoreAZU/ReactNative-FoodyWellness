import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

class FoodDetail extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              this.props.route.params.BASE_URL +
              this.props.route.params.food.foto_makanan,
          }}
          style={Styles.image}
        />
        <Text style={Styles.title}>{this.props.route.params.food.nama_makanan}</Text>
        <ScrollView style={Styles.wrapperDesc}>
          <Text>{this.props.route.params.food.deskripsi_makanan}</Text>
        </ScrollView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    width: undefined,
    height: '60%',
    resizeMode: 'contain'
  },
  title: {
    textAlign: 'center',
    margin: 5,
    fontSize: 20
  },
  wrapperDesc: {
    marginHorizontal: 10,
    // fontFamily: 'montserrat_bold'
  }


});

export default connect()(FoodDetail);
