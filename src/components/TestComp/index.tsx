import { View, Text } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAsync,
  selectCount,
} from "../../store/reducers/slice/couterSlice";

import { addScore, getScore } from "../../store/reducers/examReducer";

import { Button } from "..";
import { getExamData } from "../../api";

const TestComp = () => {
  const count = useSelector(selectCount);
  const score = useSelector(getScore);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Text>score: {score}</Text>
      <Button title="increment" onPress={() => dispatch(addScore())} />
      <Button title="shit" onPress={() => dispatch(incrementAsync(2))} />
    </View>
  );
};

export default TestComp;
