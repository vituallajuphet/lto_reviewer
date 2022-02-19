import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading, Home, OptionScreen, ExamScreen} from '../screens/';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isStarted, setStart] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={!isStarted ? 'Loading' : 'Home'}>
        <Stack.Screen options={{ headerShown: true, headerBackVisible: false , title: 'LTO Exam Reviewer'}}
          name="Home" component={Home}
        />
        <Stack.Screen options={{headerShown: false}} name="Loading" component={Loading} />
        <Stack.Screen options={{title: 'Option'}} name="OptionScreen" component={OptionScreen} />
        <Stack.Screen name="Exam" component={ExamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
