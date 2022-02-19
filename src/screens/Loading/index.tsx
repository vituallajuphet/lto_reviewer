import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Loading = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 4000);
  }, []);

  return (
    <View style={styles.screenCont}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/lto_logo.png')}
      />
      <Text style={styles.textLogo}>LTO Reviewer 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  textLogo: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Nexa-Regular',
  },
  screenCont: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#4779c7',
    padding: 20,
  },
});

export default Loading;
