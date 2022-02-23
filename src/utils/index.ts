import { Dispatch } from "@reduxjs/toolkit";
import { ViewStyle } from "react-native";
import { batch } from "react-redux";

export const getStyles = (...obj: ViewStyle[]): ViewStyle => {
  return obj.reduce((previous, current) => {
    return { ...previous, ...current };
  });
};

export const batchDispatch =
  (...args: Dispatch[]) =>
  (dispatch: Dispatch) => {
    batch(() => {
      args.map((arg: any) => dispatch(arg));
    });
  };
