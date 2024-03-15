import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export {screenWidth, screenHeight};

const currentDate = new Date();
export const hour = currentDate.getHours();
export const minute = currentDate.getMinutes();
