import { StyleSheet, View } from 'react-native';

import { Dropdown } from './components/dropdown';
import { DropdownItemType } from './components/dropdown/dropdown-list-item';

const options: DropdownItemType[] = [
  { label: 'Charts', iconName: 'barschart' },
  { label: 'Book', iconName: 'book' },
  { label: 'Calendar', iconName: 'calendar' },
  { label: 'Camera', iconName: 'camera' },
];

const header: DropdownItemType = {
  label: 'Header',
  iconName: 'ellipsis1',
};

export const SmoothDropdown = () => {
  return (
    <View style={styles.container}>
      <Dropdown header={header} options={options} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#111',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
