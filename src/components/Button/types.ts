import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  align?: 'left' | 'center' | 'right';
  bgColor?: string;
}
