import {Colors} from '../../theme/colors';

const setColors = index => {
  switch (index % 10) {
    case 0:
      return Colors.GREEN;
    case 1:
      return Colors.SOFT;
    case 2:
      return Colors.BLUE;
    case 3:
      return Colors.RED;
    case 4:
      return Colors.YELLOW;
    case 5:
      return Colors.ORANGE;
    case 6:
      return Colors.GRAY;
    case 7:
      return Colors.PURPLE;
    case 8:
      return Colors.YELLOW2;
    case 9:
      return Colors.BLUE2;

    default:
      return Colors.ORANGE;
  }
};
export {setColors};
