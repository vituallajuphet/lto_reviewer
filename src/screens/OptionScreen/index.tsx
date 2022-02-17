import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Container} from '../../components';

const OptionScreen = (props: any) => {
  const {navigation} = props;

  return (
    <Container>
      <Button
        onPress={() => {
          navigation.navigate('Exam');
        }}
        title="English"
        style={st.btnStyle}
      />
      <Button
        onPress={() => {
          console.log(1);
        }}
        title="Tagalog"
      />
    </Container>
  );
};

const st = StyleSheet.create({
  btnStyle: {
    marginBottom: 10,
  },
});

export default OptionScreen;
