import {ViewStyle} from 'react-native';

export const getStyles = (...obj: ViewStyle[]): ViewStyle => {
  return obj.reduce((previous, current) => {
    return {...previous, ...current};
  });
};
