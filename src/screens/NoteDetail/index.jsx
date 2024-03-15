import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import EditButtons, {Buttons} from '../../components/AddNote/EditButtons';
import {AppColors} from '../../theme/colors';
import MyContext from '../../context';

const NoteDetail = ({route}) => {
  const [selectStyle, setSelectStyle] = useState(styles.normal);
  const {note} = route?.params;
  const {updateNote} = useContext(MyContext);

  const changeStyleText = style => {
    switch (style) {
      case 'bold':
        setSelectStyle(styles.bold);
        break;
      case 'italic':
        setSelectStyle(styles.italic);
        break;
      case 'textUnderline':
        setSelectStyle(styles.textUnderline);
        break;
      case 'left':
        setSelectStyle(styles.left);
        break;
      case 'right':
        setSelectStyle(styles.right);
        break;
      case 'center':
        setSelectStyle(styles.center);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    return () => {
      updateNote(note.id, note);
    };
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={value => changeStyleText(value)} />
        </View>
        <View style={{backgroundColor: AppColors.WHITE, flex: 1, padding: 10}}>
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 500,
                color: AppColors.PRIMARY,
                marginVertical: 10,
              }}>
              {note.title}
            </Text>
          </View>

          <View>
            <Text
              style={[
                {
                  fontSize: 16,
                  fontWeight: '300',
                  color: AppColors.SECONDARY,
                },
                selectStyle,
              ]}>
              {note.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    textDecorationLine: 'none',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  normal: {},
});
