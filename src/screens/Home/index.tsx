import { Image, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, ButtonGroup, Container, Dialog } from "../../components";
import { st } from "./style";

interface IGroupBtnProps {
  title: string;
  onPress: () => void;
}

const Home = ({ navigation }: any) => {
  const [modalShown, setModal] = useState(false);

  const pressHandler = (...args: any) => {
    console.log(args);
  };

  const btnGroupData: IGroupBtnProps[] = [
    { title: "40", onPress: () => pressHandler(40) },
    { title: "60", onPress: () => pressHandler(60) },
    { title: "80", onPress: () => pressHandler(80) },
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
                setModal(true);
              }}
              title="Non Professional Exam - English"
              style={st.btnStyle}
            />
            <Button
              onPress={() => {
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
        <View style={{marginTop: 50}}>
          <Button
            onPress={() => {
              console.log('review')
            }}
            title="Review"
            style={{marginBottom: 10}}
            bgColor='#4779c7'
          />
          <Button
            onPress={() => {
              console.log('Take Exam')
            }}
            bgColor='green'
            title="Take Exam"
          />
        </View>
      </Dialog>
    </>
  );
};

export default Home;
