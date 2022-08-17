import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
import {Grayscale, Sepia} from 'react-native-color-matrix-image-filters';

const ImageSettingsScreen = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(15);
  const [cwidth, setCWidth] = useState(100 / rows);
  //   const [cwidth, setCWidth] = useState(wp(100) / rows);
  //   const [cheight, setCheight] = useState(wp(141.42) / cols);
  const [cheight, setCheight] = useState(141.42 / cols);
  const [cborder, setCborder] = useState(0.4);
  const [cangle, setCangle] = useState(
    (Math.atan(cwidth / cheight) * 180) / Math.PI,
  );

  const [cdia, setCdia] = useState(
    Math.sqrt(Math.pow(cwidth, 2) + Math.pow(cheight, 2)),
  );

  const [lmar, setLmar] = useState((cdia - cwidth) / 2);
  const [showdia, setShowdia] = useState(true);
  const [showcor, setShowcor] = useState(true);

  useEffect(() => {
    // console.log(cwidth, cheight, cdia);
    return () => {};
  }, []);

  const onIncrease = () => {
    setCols(cols + 1);
    // setRows(rows + 1);
    // const temp = (rows / windowWidth) * 100;
    // console.log('i', temp);

    // setCWidth(temp);
  };

  const onDecrease = () => {
    setCols(cols - 1);
    // setRows(rows - 1);

    // const temp = (rows / windowWidth) * 100;
    // console.log('d', temp);
    // setCWidth(temp);
  };

  const handleCellPress = (c, r) => {
    ToastAndroid.show(`Row ${r + 1} Column ${c + 1}`, ToastAndroid.SHORT);
    console.log(c + 1, r + 1);
  };

  return (
    <View
      style={{
        // flex: 1,
        width: wp(100),
        height: hp(100),
        // backgroundColor: 'pink'
      }}>
        <Text>Image Settings</Text>
    </View>
  );
};

export default ImageSettingsScreen;
