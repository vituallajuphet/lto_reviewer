import { ViewStyle } from "react-native";
import { batch } from "react-redux";

export const getStyles = (...obj: ViewStyle[]): ViewStyle => {
  return obj.reduce((previous, current) => {
    return { ...previous, ...current };
  });
};

export const batchDispatch = (params: any[]) => (dispatch: any) => {
  batch(() => {
    params.map((i) => {
      dispatch(i);
    });
  });
};
