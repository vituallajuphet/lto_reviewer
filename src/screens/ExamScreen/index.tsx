import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Container, Button} from '../../components';
import {data} from '../../data';

const ExamScreen = (props: any) => {
  const exam = data.non_prop.english;
  const [examId, setExamId] = useState(0);
  const letters = ['A', 'B', 'C', 'D'];
  const [score, setScore] = useState(0);

  const checkAnswer = (ans: string, corAnwser: string) => {
    Alert.alert(ans === corAnwser ? 'correct' : 'incorrect');
    setScore(ans === corAnwser ? score + 1 : score);
    setExamId(examId + 1);
  };

  const getAverage = () => {
    return (score / exam.length) * 100;
  };

  return (
    <Container>
      <View>
        {examId < exam?.length && (
          <>
            <Text>{exam[examId].question}</Text>
            {exam[examId].choices.map((e, i) => (
              <Button
                key={i}
                title={`${letters[i]}. ${e}`}
                style={{marginBottom: 10}}
                align="left"
                onPress={() => checkAnswer(e, exam[examId].ans)}
              />
            ))}
          </>
        )}
        {examId === exam.length && (
          <Text>You have {getAverage() >= 75 ? 'passed' : 'failed'}</Text>
        )}
      </View>
    </Container>
  );
};

export default ExamScreen;
