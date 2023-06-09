import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionIcon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 12,
    marginTop: 16,
  },
});
