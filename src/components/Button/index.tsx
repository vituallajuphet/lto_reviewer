import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonProps} from './types';
import {styles} from './styles';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  children,
  align = 'center',
}) => {
  return (
    <>
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={[styles.btnStyle, {textAlign: align}]}>
          {title || 'Button'}
        </Text>
        {children}
      </TouchableOpacity>
    </>
  );
};

export default Button;
