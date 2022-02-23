import {View, ViewStyle} from 'react-native';
import React from 'react';
import {ContainerProps} from './types';
import {styles} from './styles';
import {getStyles} from '../../utils';

const Container: React.FC<ContainerProps> = ({children, padding = 20, ...args}) => {
  return (
    <>
      <View style={getStyles(styles.contStyles, {padding: padding})}>
        {children}
      </View>
    </>
  );
};

export default Container;
