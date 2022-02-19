import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {ButtonProps} from './types';
import {styles} from './styles';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  children,
  align = 'center',
  bgColor,
}) => {
  const bgCol: StyleProp<ViewStyle> = bgColor
    ? { backgroundColor: bgColor }
    : {backgroundColor: '#73817b'};

  return (
    <>
      <TouchableOpacity style={[style]} onPress={onPress}>
        <Text style={[styles.btnStyle, { textAlign: align }, textStyle, bgCol]}>
          {title || 'Button'}
        </Text>
        {children}
      </TouchableOpacity>
    </>
  );
};

export default Button;
