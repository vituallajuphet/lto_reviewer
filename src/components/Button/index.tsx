import {StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {ButtonProps} from './types';
import {styles} from './styles';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  children,
  icon,
  bordered,
  textColor,
  borderColor = '#222',
  align = 'center',
  bgColor,
}) => {
  const bgCol: StyleProp<ViewStyle> = bgColor
    ? { backgroundColor: bgColor }
    : {backgroundColor: '#73817b'};

  const isbordered: StyleProp<ViewStyle> = bordered
    ? { borderWidth: 1, borderColor: borderColor, borderStyle: "solid" }
    : {};

  const alignStyle: StyleProp<ViewStyle> = align === 'center'
    ? { alignItems: 'center', justifyContent: 'center'}
    : {alignItems: 'center', justifyContent: 'flex-start'};

  const txtColor: StyleProp<TextStyle> = textColor ? { color: textColor } : {};

  return (
    <>
      <TouchableOpacity
        style={[
          style,
          isbordered,
          styles.contStyle,
          styles.btnStyle,
          bgCol,
          alignStyle,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            textStyle,
            {fontSize: 18},
            txtColor
          ]}
        >
          {title || 'Button'} 
        </Text>
        {icon && icon}
        {children}
      </TouchableOpacity>
    </>
  );
};

export default Button;
