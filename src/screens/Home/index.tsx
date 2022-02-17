import {Image, Text, View} from 'react-native';
import React from 'react';
import {Button, Container} from '../../components';
import {Button as PButton} from 'react-native-paper';
import {st} from './style';

const Home = ({navigation}: any) => (
  <View>
    <Container padding={20}>
      <View style={st.contStyle}>
        <Image
          style={st.imgStyle}
          source={require('../../assets/images/lto_logo.png')}
        />
        <Text style={st.hdStyle}>Updated LTO Exam Reviewer 2022</Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('OptionScreen');
        }}
        title="Non Professional Exam"
        style={st.btnStyle}
      />
      <Button
        onPress={() => {
          console.log(1);
        }}
        title="Professional Exam"
        style={st.btnStyle}
      />
      <Button
        onPress={() => {
          console.log(1);
        }}
        title="Road Signs"
      />
    </Container>
  </View>
);

export default Home;
