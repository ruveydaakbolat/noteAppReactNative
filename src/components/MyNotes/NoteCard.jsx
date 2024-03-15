import React, {Component, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {Trash, Edit} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNotesStyles';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';
import MyContext from '../../context';

const NoteCard = ({item, navigation}) => {
  const {deleteNote} = useContext(MyContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View
          style={
            item.read ? NoteCardStyle.buble : NoteCardStyle.bubleRead
          }></View>
      </View>
      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteNote(item.id)}
        style={NoteCardStyle.trashButtonContainer}>
        <Trash size="24" color={AppColors.RED} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={NoteCardStyle.trashButtonContainer}>
        <Edit size="24" color={AppColors.PRIMARY} variant="Bold" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default NoteCard;
