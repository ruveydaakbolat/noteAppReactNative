import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {AppColors} from '../../theme/colors';
import {Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNotesStyles';

const NoteCard = ({item}) => {
  return (
    <View style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View style={NoteCardStyle.buble}></View>
      </View>
      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <View style={NoteCardStyle.trashButtonContainer}>
        <Trash size="24" color={AppColors.SECONDARY} variant="Bold" />
      </View>
    </View>
  );
};

//make this component available to the app
export default NoteCard;
