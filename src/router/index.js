import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome5';

import ColorSettingsScreen from '../screens/ColorSettingsScreen';
import GridScreen from '../screens/GridScreen';
import ImageSettingsScreen from '../screens/ImageSettingsScreen';
import SettingScreen from '../screens/SettingScreen';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Router = () => {
  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    {
      key: 'grid',
      title: 'Grid',
      focusedIcon: 'view-grid',
      unfocusedIcon: 'view-grid-outline',
    },
    {key: 'color', title: 'Color', focusedIcon: 'format-paint'},
    {key: 'recents', title: 'Photos', focusedIcon: 'history'},
    {
      key: 'setting',
      title: 'Settings',
      focusedIcon: props => <Ionicons name="md-settings-sharp" {...props} />,
      unfocusedIcon: props => (
        <Ionicons name="md-settings-outline" {...props} />
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    grid: GridScreen,
    color: ColorSettingsScreen,
    recents: ImageSettingsScreen,
    setting: SettingScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Router;
