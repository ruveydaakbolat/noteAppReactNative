import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {screenWidth} from '../utils/constants';

const NoteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#9a9a9a',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  bubleContainer: {flex: 1, alignItems: 'center', top: 5, opacity: 0.5},
  buble: {
    width: screenWidth * 0.02,
    height: screenWidth * 0.02,
    backgroundColor: AppColors.GRAY,
    borderRadius: 100,
  },
  bubleRead: {
    width: screenWidth * 0.02,
    height: screenWidth * 0.02,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 100,
  },
  noteContainer: {flex: 8, gap: 5},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.SECONDARY,
  },
  description: {
    fontSize: 14,
    color: AppColors.GRAY,
  },
  date: {
    fontSize: 14,
    color: AppColors.GRAY,
  },
  trashButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export {NoteCardStyle};
