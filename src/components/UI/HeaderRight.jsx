import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {More, Share, Folder} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Folder size="24" color={AppColors.SECONDARY} />
      <Share size="24" color={AppColors.SECONDARY} />
      <More size="24" color={AppColors.SECONDARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

export default HeaderRight;
