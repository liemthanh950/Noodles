import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const Done = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/backgroud.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.textDone}>DON</Text>
          <ImageBackground
            source={require('../image/Done.png')}
            resizeMode="cover"
            style={styles.Done}></ImageBackground>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
            <Text style={styles.textEnjoy}> Enjoy your noodles</Text>
            <Image style={styles.Tim} source={require('../image/Tim.png')} />
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                style={styles.buttonback}
                source={require('../image/buttonback.png')}
              />
            </TouchableOpacity>
            <Text style={styles.text_getthembelow}>Get them below</Text>
            <Image
              style={styles.next_getthembelow}
              source={require('../image/nextdown.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 120,
    alignSelf: 'center',
    marginTop: 10,
  },
  textDone: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: 10,
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  Done: {
    width: 140,
    height: 160,
    alignSelf: 'center',
    marginVertical: 10,
  },
  textEnjoy: {
    color: '#C71A1A',
    fontFamily: 'PaytoneOne',
    fontSize: 25,
  },
  Tim: {
    width: 30,
    height: 25,
    marginLeft: 10,
    marginTop: 10,
  },
  buttonback: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    marginTop: 70,
  },
  text_getthembelow: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#F8C135',
  },
  next_getthembelow: {
    width: 25,
    height: 40,
    alignSelf: 'center',
  },
});

export default Done;
