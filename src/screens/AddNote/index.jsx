import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/UI/Button';
import {AppColors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';
import {MYNOTES} from '../../utils/routes';
import {hour, minute} from '../../utils/constants';

const AddNote = ({route, navigation}) => {
  const {addNote, updateNote} = useContext(MyContext);
  const {note} = route?.params;
  const {type} = route?.params;
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (!title) {
      setTitleRequired(true);
    }

    if (!description) {
      setDescriptionRequired(true);
    }

    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1, 1000),
        title,
        description,
        date: `${hour}:${minute} pm`,
        read: false,
      };
      addNote(form);
      navigation.navigate(MYNOTES);
    }
  };

  const onChangeNote = () => {
    if (!title) {
      setTitleRequired(true);
    }

    if (!description) {
      setDescriptionRequired(true);
    }

    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title,
        description,
        date: '12:12',
        read: false,
      };
      updateNote(note.id, form);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View
          style={{
            flex: 1,
            padding: 10,
          }}>
          <Text style={{fontWeight: '500', fontSize: 16, marginLeft: 10}}>
            Title
          </Text>
          <TextInput
            placeholder="Please write your title in this field..."
            value={title}
            style={{
              backgroundColor: AppColors.WHITE,
              margin: 8,
              borderWidth: 0.2,
              padding: 5,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 50,
            }}
            onChangeText={text => setTitle(text)}
          />
          {titleRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginLeft: 10,
                marginVertical: 5,
                marginBottom: 20,
                color: AppColors.RED,
              }}>
              Please fill in the title field!
            </Text>
          )}
          <Text style={{fontWeight: '500', fontSize: 16, marginLeft: 10}}>
            Description
          </Text>
          <TextInput
            placeholder="Please write the description in this field..."
            value={description}
            style={{
              backgroundColor: AppColors.WHITE,
              margin: 8,
              borderWidth: 0.2,
              padding: 5,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 130,
            }}
            onChangeText={text => setDescription(text)}
          />
          {descriptionRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginLeft: 10,
                marginVertical: 5,
                color: AppColors.RED,
              }}>
              Please fill in the description field!
            </Text>
          )}
        </View>
        <View>
          <Button
            title={type === 'update' ? 'Update' : 'Save'}
            onPress={type == 'update' ? onChangeNote : saveNote}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
