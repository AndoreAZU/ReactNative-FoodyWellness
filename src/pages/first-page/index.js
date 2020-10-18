import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import banner from '../../../assets/image/banner_first_page.png';
import ItemFood from './item';
import {useSelector, connect} from 'react-redux';

const ListAllFood = (props) => {
  const FinishLoaded = useSelector((state) => state.finish_loaded);
  const AllFood = useSelector((state) => state.all_makanan);
  const BASE_URL = useSelector((state) => state.base_url);

  return (
    <View style={Styles.wrapperListItem}>
      <View style={Styles.wrapperItem}>
        {AllFood.map((food, index) => (
          <View style={Styles.item} key={food.id_makanan}>
            <ItemFood
              image={{uri: BASE_URL + food.foto_makanan}}
              title={food.nama_makanan}
              button_click={() => {
                props.navigation.navigate('Food Detail', {food, BASE_URL: BASE_URL});
                // alert(food.nama_makanan);
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

class FirstPage extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <View style={Styles.wrapperButton}>
          <Image source={banner} style={Styles.banner} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={Styles.button}>
              <Text style={{color: 'white'}}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.button}>
              <Text style={{color: 'white'}}>Register</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.button}>
              <Text style={{color: 'white'}}>Guest</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 5,
          }}>
          Our Specialized Menu
        </Text>

        <ScrollView>
          <ListAllFood navigation={navigation}/>
        </ScrollView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperButton: {
    alignItems: 'center',
    position: 'relative',
    height: 200,
    justifyContent: 'center',
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    resizeMode: 'stretch',
    height: 200,
    position: 'absolute',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#23D20A',
    padding: 10,
    width: 80,
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapperListItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperItem: {
    padding: 10,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    padding: 20,
    flexBasis: '50%',
  },
});

export default connect()(FirstPage);
