import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import SettingScreen from './src/screens/SettingScreen'
import TestScreen from './src/screens/TestScreen'
import ImageSettingsScreen from './src/screens/ImageSettingsScreen'
import ColorSettingsScreen from './src/screens/ColorSettingsScreen'
import GridScreen from './src/screens/GridScreen'
import Router from './src/router'

const App = () => {
  return (
    <>
      {/* <HomeScreen /> */}
      {/* <SettingScreen /> */}
      {/* <TestScreen /> */}
      {/* <ImageSettingsScreen /> */}
      {/* <ColorSettingsScreen /> */}
      {/* <GridScreen /> */}
      <Router />
    </>
  )
}

export default App