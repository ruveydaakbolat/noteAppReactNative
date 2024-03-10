import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/UI/Button';
import EditButtons from '../../components/AddNote/EditButtons';
import {AppColors} from '../../theme/colors';

const AddNote = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <TextInput
            placeholder="Lütfen notunuzu bu alana yazınız"
            value=""
            style={{
              flex: 1,
              backgroundColor: AppColors.WHITE,
              margin: 8,
              borderWidth: 0.2,
              padding: 5,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
            }}
          />
        </View>
        <View>
          <Button title="Kaydet" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
