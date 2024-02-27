//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenHeight} from '../../utils/constants';
import {MYNOTES} from '../../utils/routes';
import {AppColors} from '../../theme/colors';
import {HambergerMenu, SearchNormal, More} from 'iconsax-react-native';

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 35, color: AppColors.SECONDARY}}>
          {MYNOTES}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: 15,
          }}>
          <HambergerMenu size="24" color={AppColors.SECONDARY} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 10,
          }}>
          <SearchNormal size="24" color={AppColors.SECONDARY} />
          <More size="24" color={AppColors.SECONDARY} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
    padding: 10,
  },
});

//make this component available to the app
export default Header;
