import commonStyles from './common';
import colors from './colors';

console.log(colors);

export default {
  ...commonStyles,
  backgroundColor: colors.dark,
  textColor: colors.white,
}