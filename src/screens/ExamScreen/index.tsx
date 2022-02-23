import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Container, Button} from '../../components';
import {data} from '../../data';
import { screenState } from '../../store/reducers/screenReducer';
import { useSelector } from 'react-redux';

const ExamScreen = (props: any) => {
  const exam = data.non_prop.english.sort((a, b) => 0.5 - Math.random());

  const [examId, setExamId] = useState(0);
  const letters = ["A", "B", "C", "D"];
  const [score, setScore] = useState(0);
  const [yourAnswer, setYourAnswer] = useState('');
  const [doneAnswer, setDoneAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = (ans: string, corAnwser: string) => {
    const corLetter = exam[examId].choices.findIndex(c => c === corAnwser);

    if (!doneAnswer) {
      Alert.alert(
        "Your answer is " +
          (ans === corAnwser
            ? "correct"
            : "incorrect" + "\nThe correct answer is letter: " + letters[corLetter])
      );
      setYourAnswer(ans);
      setScore(ans === corAnwser ? score + 1 : score);
      setDoneAnswer(true);
      setIsCorrect(ans === corAnwser);
    }
  };

  const getAverage = () => {
    return (score / exam.length) * 100;
  };

  const nextQuestion = () => {
    if (doneAnswer) {
      setExamId(examId + 1);
      setDoneAnswer(false);
    }
  };
  const isStarted = useSelector(screenState);

  return (
      <View>
        {examId < exam?.length && (
          <>
            <View>
               <Container>
                <View style={eSt.questCont}>
                  <Text style={eSt.questTxt}>Question:</Text>
                  <Text style={eSt.questTxt}>
                    {examId + 1}/{exam.length}
                  </Text>
                </View>
                <View>
                  <Text style={[eSt.questTxt, {marginTop: 7}]}>Score: {score}</Text>
                </View>
               </Container>
              <View style={eSt.questionSt}>
                <Text style={eSt.headngSt}>{exam[examId].question}</Text>
              </View>
            </View>
            <Container padding={10}>
            {exam[examId].choices.map((e, i) => {
              const borderCol =
                (doneAnswer && exam[examId].ans === e && "green") ||
                (doneAnswer && yourAnswer === e && !isCorrect && "red") ||
                "#999";
              
              return (
                <Button
                  key={i}
                  title={e}
                  style={{marginBottom: 10, borderRadius: 5}}
                  bgColor='white'
                  textColor='#222'
                  borderColor={borderCol}
                  align="left"
                  bordered={true}
                  onPress={() => checkAnswer(e, exam[examId].ans)}
                />
              )
            })}
            {doneAnswer && (
              <View>
                <Button
                  title={examId + 1 === exam.length ? "Review Score" : "Next"}
                  onPress={() => nextQuestion()}
                />
              </View>
            )}
            </Container>
           
          </>
        )}
        {examId === exam.length &&(
         <View>
            <Text style={{color:'red'}}>Your Score: {score}</Text>
            <Text style={{color:'red'}}>Passing Rate: 75%</Text>
            <Text style={{color:'red'}}>Your Score Rate: {getAverage()} </Text>
            <Text style={{color:'red'}}>You have {getAverage() >= 75 ? 'passed' : 'failed'}</Text>
         </View>
        )}
      </View>
  );
};

const eSt = StyleSheet.create({
  headngSt: {
    fontSize: 20,
    fontFamily: 'Nexa-Regular',
  },
  questionSt: {
    backgroundColor: '#4779c7',
    padding: 15,
    minHeight: 200,
    marginBottom: 20,
  },
  questTxt: {
    color: '#222',
    fontSize: 18,
    fontFamily: 'Nexa-Bold',
  },
  questCont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default ExamScreen;
