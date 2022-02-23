import { Image, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container, Dialog } from "../../components";
import { st } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import {
  getExamState,
  setCategory,
  setNumberOfItems,
  setTestType,
  startExam,
} from "../../store/reducers/examReducer";
import { batchDispatch } from "../../utils";

interface IGroupBtnProps {
  title: string;
  onPress: () => void;
}

const Home = ({ navigation }: any) => {
  const [modalShown, setModal] = useState(false);
  const dispatch = useDispatch();

  const btnGroupData: IGroupBtnProps[] = [
    { title: "40", onPress: () => dispatch(setNumberOfItems(40)) },
    { title: "60", onPress: () => dispatch(setNumberOfItems(60)) },
    { title: "80", onPress: () => dispatch(setNumberOfItems(80)) },
  ];

  return (
    <>
      <View style={st.pageStyle}>
        <Container padding={20}>
          <View style={st.contStyle}>
            <Image
              style={st.imgStyle}
              source={require("../../assets/images/lto_logo.png")}
            />
            <Text style={st.hdStyle}>Updated LTO Exam Reviewer 2022</Text>
          </View>
          <View style={st.ViewCatSt}>
            <Text style={st.catStyle}>Category</Text>
          </View>
          <ScrollView>
            <Button
              onPress={() => {
                dispatch(
                  batchDispatch(setTestType("english"), setCategory("non-prof"))
                );
                setModal(true);
              }}
              title="Non Professional Exam - English"
              style={st.btnStyle}
            />
            <Button
              onPress={() => {
                dispatch(
                  batchDispatch(setTestType("tagalog"), setCategory("non-prof"))
                );
                setModal(true);
              }}
              title="Non Professional Exam - Tagalog"
              style={st.btnStyle}
            />
            <Button
              onPress={() => {
                console.log(1);
              }}
              title="Professional Exam - English"
              style={st.btnStyle}
            />
            <Button
              onPress={() => {
                console.log(1);
              }}
              title="Professional Exam - Tagalog"
              style={st.btnStyle}
            />
            <Button
              onPress={() => {
                setModal(true);
              }}
              title="Traffic Signs"
            />
          </ScrollView>
        </Container>
      </View>
      <Dialog
        shown={modalShown}
        showHandler={(isShow: boolean) => {
          setModal(isShow);
        }}
      >
        <Text style={st.modalHeading}>Number of Questions:</Text>
        <ButtonGroup btnData={btnGroupData} />
        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              console.log("review");
            }}
            title="Review"
            style={{ marginBottom: 10 }}
            bgColor="#4779c7"
            icon={<Icon name="eye" style={{ fontSize: 18, marginLeft: 10 }} />}
          />
          <Button
            onPress={() => {
              dispatch(startExam());
              navigation.navigate("Exam");
            }}
            bgColor="green"
            title="Take Exam"
            icon={
              <Icon name="check" style={{ fontSize: 18, marginLeft: 10 }} />
            }
          />
        </View>
      </Dialog>
    </>
  );
};

export default Home;
