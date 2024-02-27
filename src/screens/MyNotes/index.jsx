//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Header from '../../components/Router/Header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/UI/FloatActionButton';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/MyNotes/NoteCard';
import {ADDNOTE} from '../../utils/routes';

// create a component
const MyNotes = ({navigation}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={mockData}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />
        <FloatActionButton onPress={() => navigation.navigate(ADDNOTE)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
