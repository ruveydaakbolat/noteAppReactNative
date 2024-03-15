import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/routes';
import MyNotes from '../screens/MyNotes';
import NoteDetail from '../screens/NoteDetail';
import AddNote from '../screens/AddNote';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/UI/HeaderRight';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: AppColors.SECONDARY,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerRight: props => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
