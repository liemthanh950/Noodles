import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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

const InformationScreen = ({navigation}) => {
  const Hover = useSelector(state => state.NoodlesReducer.hover);
  const [selectedHover1, setSelectedHover1] = useState(false);
  const [selectedHover2, setSelectedHover2] = useState(false);
  const [selectedHover3, setSelectedHover3] = useState(false);
  const [comeBack, setComeBack] = useState(false);

  //firebase
  const [data, setData] = useState([]);
  const getuser = () => {
    firebase
      .database()
      .ref()
      .child('information')
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
        setData(infor);
        console.log('data', data);
      });
  };

  useEffect(() => {
    getuser();
  }, []);
  const setHover1 = hover =>
    dispatch({
      type: 'SET_HOVER1',
      payload: hover,
    });
  const setHover2 = hover =>
    dispatch({
      type: 'SET_HOVER2',
      payload: hover,
    });
  const setHover3 = hover =>
    dispatch({
      type: 'SET_HOVER3',
      payload: hover,
    });
  const dispatch = useDispatch();

  const handleGetNoodles = () => {
    // redux
    if (selectedHover1) {
      setHover1(false);
      setSelectedHover1(false);
    }

    if (selectedHover2) {
      setHover2(false);
      setSelectedHover2(false);
    }
    if (selectedHover3) {
      setHover3(false);
      setSelectedHover3(false);
    }

    navigation.navigate('DoneScreen');
  };

  return (
    <>
      {data.length != 0 ? (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={require('../image/backgroud.jpg')}
            resizeMode="cover"
            style={styles.container}>
            <View>
              <Image
                style={styles.logo}
                source={require('../image/logo.png')}
              />
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
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        marginLeft: 40,
                      }}>
                      <Text style={styles.textfullname}>Full Name:</Text>
                      <Text style={styles.textname}>{data[0].fullname}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 40,
                        marginTop: 5,
                      }}>
                      <Text style={styles.textfullname}>Birthday:</Text>
                      <Text style={styles.textbirthay}> {data[0].birthay}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 40,
                        marginTop: 5,
                      }}>
                      <Text style={styles.textfullname}>Gender: </Text>
                      <Text style={styles.textgender}>{data[0].gender}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 40,
                        marginTop: 5,
                      }}>
                      <Text style={styles.textfullname}>Department:</Text>
                      <Text style={styles.textdepartment}>
                        {data[0].department}
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>

              <View style={styles.css_noodles}>
                <View>
                  {Hover.hover1 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedHover1(!selectedHover1);
                      }}>
                      {selectedHover1 == true && (
                        <Image
                          style={styles.hover}
                          source={require('../image/hover.png')}
                        />
                      )}
                      <Image
                        style={styles.noodles}
                        source={require('../image/noodles.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      <Image
                        style={styles.unavailableNoodles}
                        source={require('../image/unavailableNoodles.png')}
                      />
                      <Text style={styles.css_unavailableText}>
                        Unavailable
                      </Text>
                    </View>
                  )}
                </View>
                <View>
                  {Hover.hover2 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedHover2(!selectedHover2);
                      }}>
                      {selectedHover2 == true && (
                        <Image
                          style={styles.hover}
                          source={require('../image/hover.png')}
                        />
                      )}
                      <Image
                        style={styles.noodles}
                        source={require('../image/noodles.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      <Image
                        style={styles.unavailableNoodles}
                        source={require('../image/unavailableNoodles.png')}
                      />
                      <Text style={styles.css_unavailableText}>
                        Unavailable
                      </Text>
                    </View>
                  )}
                </View>

                <View>
                  {Hover.hover3 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedHover3(!selectedHover3);
                      }}>
                      {selectedHover3 == true && (
                        <Image
                          style={styles.hover}
                          source={require('../image/hover.png')}
                        />
                      )}
                      <Image
                        style={styles.noodles}
                        source={require('../image/noodles.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      <Image
                        style={styles.unavailableNoodles}
                        source={require('../image/unavailableNoodles.png')}
                      />
                      <Text style={styles.css_unavailableText}>
                        Unavailable
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{color: '#D91313', fontWeight: 'bold', fontSize: 15}}>
                  {Hover.remain}
                </Text>
                <Text style={{color: '#9C6666', fontSize: 15}}>
                  {' '}
                  cups of noodles left this month
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleGetNoodles}>
              <Image
                style={styles.buttonget}
                source={require('../image/buttonget.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setComeBack(!comeBack);
              }}>
              {comeBack == true && (
                <Image
                  style={styles.buttoncomeback}
                  source={require('../image/buttoncomeback.png')}
                />
              )}
            </TouchableOpacity>
          </ImageBackground>
        </SafeAreaView>
      ) : (
        <></>
      )}
    </>
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
    marginHorizontal: 30,
  },
  noodles: {
    width: 60,
    height: 90,
  },
  buttonget: {
    width: 300,
    height: 50,
    marginTop: 60,
    position: 'absolute',
    alignSelf: 'center',
  },
  buttoncomeback: {
    width: 300,
    height: 50,
  },
  css_noodles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 10,
  },
  css_hover: {
    flexDirection: 'row',
    width: 330,
    justifyContent: 'space-around',
    position: 'absolute',
    alignSelf: 'center',
  },
  hover: {
    marginTop: 10,
    width: 80,
    height: 80,
    position: 'absolute',
    marginLeft: -10,
  },
  css_unavailableNoodles: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-around',
    position: 'absolute',
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
  textbirthay: {
    marginLeft: 35,
    fontSize: 15,
    color: '#880B0B',
  },
  textgender: {
    marginLeft: 45,
    fontSize: 15,
    color: '#880B0B',
  },
  textdesign: {
    marginLeft: 40,
    fontSize: 15,
    color: '#880B0B',
  },
  textdepartment: {
    marginLeft: 15,
    fontSize: 15,
    color: '#880B0B',
  },
});
export default InformationScreen;
