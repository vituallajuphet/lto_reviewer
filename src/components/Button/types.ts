import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  align?: 'left' | 'center' | 'right';
  bgColor?: string;
  bordered?: boolean;
  textColor?: string;
  borderColor?: string;
  icon?: React.FC | JSX.Element;
}
