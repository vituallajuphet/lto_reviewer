import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Container, Button, Dialog } from "../../components";
import { data } from "../../data";
import { screenState } from "../../store/reducers/screenReducer";
import { useSelector } from "react-redux";
import { getQuestion } from "../../store/reducers/examReducer";
import Icon from "react-native-vector-icons/FontAwesome";

const ExamScreen = (props: any) => {
  const isStarted = useSelector(screenState);
  const examData: any[] = useSelector(getQuestion);
  // const exam = data.non_prop.english.sort((a, b) => 0.5 - Math.random());

  const [examId, setExamId] = useState(0);
  const [score, setScore] = useState(0);
  const [yourAnswer, setYourAnswer] = useState("");
  const [doneAnswer, setDoneAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [correctAns, setCorrectAns] = useState("");

  const checkAnswer = (ans: string, corAnwser: string) => {
    if (!doneAnswer) {
      setCorrectAns(corAnwser);
      setShowDialog(true);
      setYourAnswer(ans);
      setScore(ans === corAnwser ? score + 1 : score);
      setDoneAnswer(true);
      setIsCorrect(ans === corAnwser);
    }
  };

  const getAverage = () => {
    return (score / examData.length) * 100;
  };

  const nextQuestion = () => {
    if (doneAnswer) {
      setExamId(examId + 1);
      setDoneAnswer(false);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={{ height: "100%" }}>
          {examId < examData?.length && (
            <>
              <View>
                <Container>
                  <View style={eSt.questCont}>
                    <Text style={eSt.questTxt}>Question:</Text>
                    <Text style={eSt.questTxt}>
                      {examId + 1}/{examData.length}
                    </Text>
                  </View>
                  <View>
                    <Text style={[eSt.questTxt, { marginTop: 7 }]}>
                      Score: {score}
                    </Text>
                  </View>
                </Container>
                <View style={eSt.questionSt}>
                  <Text style={eSt.headngSt}>{examData[examId].question}</Text>
                </View>
              </View>
              <Container padding={10}>
                {examData[examId].choices.map((e, i) => {
                  const borderCol =
                    (doneAnswer && examData[examId].correct === e && "green") ||
                    (doneAnswer && yourAnswer === e && !isCorrect && "red") ||
                    "#999";

                  return (
                    <Button
                      key={i}
                      title={e}
                      style={{ marginBottom: 10, borderRadius: 5 }}
                      bgColor="white"
                      textColor="#222"
                      borderColor={borderCol}
                      align="left"
                      bordered={true}
                      onPress={() => checkAnswer(e, examData[examId].correct)}
                    />
                  );
                })}
                {doneAnswer && (
                  <View>
                    <Button
                      title={
                        examId + 1 === examData.length
                          ? "Review Score"
                          : "Next Question"
                      }
                      icon={
                        <Icon
                          name="chevron-right"
                          size={20}
                          color="#fff"
                          style={{ marginLeft: 7 }}
                        />
                      }
                      onPress={() => nextQuestion()}
                      bgColor="green"
                      textColor="#fff"
                    />
                  </View>
                )}
              </Container>
            </>
          )}
          {examId === examData.length && (
            <View>
              <Text style={{ color: "red" }}>Your Score: {score}</Text>
              <Text style={{ color: "red" }}>Passing Rate: 75%</Text>
              <Text style={{ color: "red" }}>
                Your Score Rate: {getAverage()}{" "}
              </Text>
              <Text style={{ color: "red" }}>
                You have {getAverage() >= 75 ? "passed" : "failed"}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Dialog
        shown={showDialog}
        showHandler={(isShow: boolean) => {
          setShowDialog(isShow);
        }}
      >
        <View>
          <Text style={isCorrect ? eSt.correctStyle : eSt.incorrectStyle}>
            Your answer is: {isCorrect ? "Correct" : "Incorrect"}
          </Text>
          {!isCorrect && (
            <View style={{ marginBottom: 15 }}>
              <Text style={{ color: "#555", fontSize: 17 }}>
                The correct answer is:
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 5,
                  color: "#555",
                }}
              >
                {correctAns}
              </Text>
            </View>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Button
              icon={
                <Icon
                  name="times"
                  size={22}
                  color="#fff"
                  style={{ marginLeft: 7 }}
                />
              }
              onPress={() => setShowDialog(false)}
              style={{ width: 100 }}
              title="Close"
              bgColor="#4779c7"
              textColor="#fff"
            />
          </View>
        </View>
      </Dialog>
    </>
  );
};

const eSt = StyleSheet.create({
  headngSt: {
    fontSize: 20,
    fontFamily: "Nexa-Regular",
  },
  questionSt: {
    backgroundColor: "#4779c7",
    padding: 15,
    minHeight: 200,
    marginBottom: 20,
  },
  questTxt: {
    color: "#222",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
  questCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  correctStyle: {
    textAlign: "center",
    fontSize: 22,
    color: "green",
  },
  incorrectStyle: {
    textAlign: "left",
    fontSize: 20,
    color: "red",
    marginBottom: 20,
  },
});

export default ExamScreen;
