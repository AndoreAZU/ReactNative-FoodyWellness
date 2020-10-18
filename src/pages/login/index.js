import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Button,
  ActivityIndicator,
} from 'react-native';
import banner from '../../../assets/image/logo_foody_wellness.png';
import {
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {connect, useSelector, useDispatch} from 'react-redux';
import APIContainer from '../../api';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const BASE_URL = useSelector((state) => state.base_url);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  function clicked() {
    p = new APIContainer;
    // p.name();
    setLoading(true);
    fetch(BASE_URL + 'customer/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_cust: email,
        password_cust: pass,
      }),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        dispatch({type: 'LOGIN', value: responseJSON.data});
        setLoading(false);
        console.log('Login');
        console.log(responseJSON);
        // navigation.replace('Foody Wellness');
      });
  }

  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      {loading && (
        <View style={Styles.loading}>
          <ActivityIndicator color="blue" size="large" />
        </View>
      )}
      {/* <View style={{flex: 1}}> */}
      <Image source={banner} style={Styles.image} />
      {/* </View> */}
      <View style={Styles.wrapperInput}>
        <TextInput
          style={Styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(pass) => setEmail(pass)}
        />
        <View style={{marginTop: 10}}>
          <Button title="Login" color="green" onPress={() => clicked()} />
        </View>
      </View>
      <View style={Styles.wrapperButton}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Text style={{marginRight: 10}}>Dont have an acount ?</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 20}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{color: 'purple', fontWeight: 'bold'}}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default connect()(Login);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: '40%',
  },
  wrapperInput: {
    justifyContent: 'center',
    width: '40%',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
  wrapperButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});
