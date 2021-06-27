import commonStyles from './common';
import colors from './colors';

console.log(colors);

export default {
  ...commonStyles,
  lightBackgroundColor: colors.white,
  darkBackgroundColor: colors.main,
  lightTextColor: colors.white,
  darkTextColor: colors.dark,
}
