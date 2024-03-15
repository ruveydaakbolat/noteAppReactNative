//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {
  TextBold,
  Text,
  TextUnderline,
  TextalignJustifyleft,
  TextalignJustifyright,
  TextalignCenter,
} from 'iconsax-react-native';

// create a component
const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 2,
      value: 'italic',
      icon: <Text size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 3,
      value: 'textUnderline',
      icon: <TextUnderline size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 4,
      value: 'left',
      icon: <TextalignJustifyleft size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 5,
      value: 'right',
      icon: <TextalignJustifyright size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 6,
      value: 'center',
      icon: <TextalignCenter size="30" color={AppColors.SECONDARY} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity onPress={() => onChangeStyle(item.value)} key={index}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.SCREENBACKGROUNDCOLOR,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
});

//make this component available to the app
export default EditButtons;
