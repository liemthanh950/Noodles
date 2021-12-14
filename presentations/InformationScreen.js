import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import firebase from '../firebase/firebase';

const information = () => {
  const [data, setData] = useState([]);
  const getuser = () => {
    firebase
      .database()
      .ref()
      .child('/information')
      .on('value', snapshot => {
        var infor = [];
        snapshot.forEach(child => {
          let information = {
            fullname: child.val().fullname,
            birthay: child.val().birthay,
            gender: child.val().gender,
            department: child.val().department,
          };
          infor.push(information);
        });
        console.log(infor);
        setData(infor);
        console.log('dad', data);
      });
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/backgroud.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.textinformation}>INFORMATION</Text>
          <ImageBackground
            source={require('../image/BGcard.png')}
            resizeMode="cover"
            style={styles.BGcard}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.user}
                source={require('../image/user.jpg')}
              />
              <View>
                <View
                  style={{flexDirection: 'row', marginTop: 10, marginLeft: 40}}>
                  <Text style={styles.textfullname}>Full Name:</Text>
                  <Text style={styles.textname}></Text>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: 40, marginTop: 5}}>
                  <Text style={styles.textfullname}>Birthday:</Text>
                  <Text style={styles.textname}> 12/10/1999</Text>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: 40, marginTop: 5}}>
                  <Text style={styles.textfullname}>Gender::</Text>
                  <Text style={styles.textname}> Female</Text>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: 40, marginTop: 5}}>
                  <Text style={styles.textfullname}>Department:</Text>
                  <Text style={styles.textname}>Design</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          {/*Cham đỏ ly mì*/}
          <View style={styles.css_hover}>
            <Image
              style={styles.hover}
              source={require('../image/hover.png')}
            />
            <Image
              style={styles.hover}
              source={require('../image/hover.png')}
            />
            <Image
              style={styles.hover}
              source={require('../image/hover.png')}
            />
          </View>
          {/*Ly mì còn*/}
          <View style={styles.css_noodles}>
            <Image
              style={styles.noodles}
              source={require('../image/noodles.png')}
            />
            <Image
              style={styles.noodles}
              source={require('../image/noodles.png')}
            />
            <Image
              style={styles.noodles}
              source={require('../image/noodles.png')}
            />
          </View>
          {/*ly mì hết*/}
          <View style={styles.css_unavailableNoodles}>
            <Image
              style={styles.unavailableNoodles}
              source={require('../image/unavailableNoodles.png')}
            />
            <Image
              style={styles.unavailableNoodles}
              source={require('../image/unavailableNoodles.png')}
            />
            <Image
              style={styles.unavailableNoodles}
              source={require('../image/unavailableNoodles.png')}
            />
          </View>
          <View style={styles.unavailableText}>
            <Text style={styles.css_unavailableText}>Unavailable</Text>
            <Text style={styles.css_unavailableText}>Unavailable</Text>
            <Text style={styles.css_unavailableText}>Unavailable</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
            <Text style={{color: '#D91313', fontWeight: 'bold', fontSize: 15}}>
              3
            </Text>
            <Text style={{color: '#9C6666', fontSize: 15}}>
              {' '}
              cups of noodles left this month
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 70}}>
          <Image
            style={styles.buttoncomeback}
            source={require('../image/buttoncomeback.png')}
          />
          <Image
            style={styles.buttonget}
            source={require('../image/buttonget.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 90,
    alignSelf: 'center',
    marginTop: 10,
  },
  textinformation: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  BGcard: {
    width: 350,
    height: 130,
    alignSelf: 'center',
    marginVertical: 10,
  },
  user: {
    width: 70,
    height: 70,
    marginTop: 30,
    marginLeft: 20,
    borderRadius: 30,
  },
  textfullname: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#880B0B',
  },
  textname: {
    fontSize: 15,
    color: '#880B0B',
    marginHorizontal: 40,
  },
  noodles: {
    width: 50,
    height: 100,
  },
  buttonget: {
    width: 300,
    height: 50,
    marginTop: 450,
    position: 'absolute',
  },
  buttoncomeback: {
    width: 300,
    height: 50,
    marginTop: -30,
  },
  css_noodles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 10,
  },
  css_hover: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-around',
    position: 'absolute',
    marginTop: 330,
    alignSelf: 'center',
  },
  hover: {
    width: 80,
    height: 80,
  },
  css_unavailableNoodles: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-around',
    position: 'absolute',
    marginTop: 320,
    alignSelf: 'center',
  },
  unavailableNoodles: {
    width: 60,
    height: 100,
  },
  unavailableText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  css_unavailableText: {
    fontFamily: 'PaytoneOne-Regular',
    fontSize: 15,
    width: 100,
    color: '#C4C4C4',
  },
});
export default information;
