import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/UI/Button';
import EditButtons from '../../components/AddNote/EditButtons';

const AddNote = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View style={{flex: 1}}>
          <Text>Add Note</Text>
        </View>
        <View>
          <Button title="Kaydet" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
