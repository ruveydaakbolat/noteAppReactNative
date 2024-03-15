//import liraries
import React, {useEffect, useContext} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import Header from '../../components/Router/Header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/UI/FloatActionButton';
import NoteCard from '../../components/MyNotes/NoteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

// create a component
const MyNotes = ({navigation}) => {
  const {notes} = useContext(MyContext);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
