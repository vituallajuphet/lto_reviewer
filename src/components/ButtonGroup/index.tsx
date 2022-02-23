import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../";

interface btnType {
  title: string;
  onPress: () => void;
}

interface IProps {
  btnData?: btnType[];
}

const ButtonGroup: React.FC<IProps> = ({ btnData }) => {
  const [active, setActive] = useState(0);

  const onPressHandler = (idx: number) => {
    setActive(idx);
    if (btnData !== undefined) {
      btnData[idx].onPress();
    }
  };

  const btnWidth = btnData ? 100 / btnData?.length - 1 + "%" : "100%";

  return (
    <View style={st.viewStyle}>
      {btnData?.map((dta, i: number) => {
        const isActive = active === i;

        return (
          <Button
            key={i}
            style={[{ width: btnWidth }, { borderRadius: 0 }]}
            textStyle={isActive ? st.activeStyle : {}}
            title={dta.title}
            onPress={() => onPressHandler(i)}
            bgColor={isActive ? "#4779c7" : ""}
          />
        );
      })}
    </View>
  );
};

const st = StyleSheet.create({
  btnStyle: {
    borderRadius: 0,
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activeStyle: {
    fontWeight: "bold",
  },
});

export default ButtonGroup;
