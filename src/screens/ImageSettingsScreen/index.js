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
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

// const LeftContent = ;
// const LeftContent2 =;

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
    <>
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Photo Setup" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <View
        style={{
          // backgroundColor: 'pink',
          width: wp(100),
          height: hp(80),
        }}>
        <ScrollView contentContainerStyle={{
          paddingBottom: wp(5)
        }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Title
              style={{
                marginTop: wp(1.5),
                marginLeft: wp(5),
              }}>
              Start Project
            </Title>
            <View
              style={{
                flex: 1,
                marginTop: wp(5),
                elevation: 0,
              }}>
              <Card.Title
                title="Local Upload"
                subtitle="Draw using images from Gallery & Google Photos"
                subtitleNumberOfLines={2}
                left={props => <Avatar.Icon {...props} icon="image-multiple" />}
              />
            </View>

            <View
              style={{
                flex: 1,
                marginTop: wp(5),
                elevation: 0,
              }}>
              <Card.Title
                title="Open Camera"
                subtitle="Card Subtitle"
                left={props => <Avatar.Icon {...props} icon="camera" />}
              />
            </View>
          </View>

          <Title
            style={{
              marginTop: wp(5),
              marginLeft: wp(5),
            }}>
            Recent Projects
          </Title>

          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />

          </View>
        </ScrollView>
      </View>
    </>
  );
};

const ImagePreview = () => {
  return (
    <Card style={{
      width: wp(42.5),
      height: wp(42.5),
      marginLeft: wp(5),
      marginTop: wp(5),
      backgroundColor: 'white',
      overflow: 'hidden',
    }}>
      <Image style={{
        flex: 1,
      }} source={{ uri: 'https://img5.goodfon.com/wallpaper/nbig/e/76/amanda-cerny-devushka-kosy-maika-vzgliad.jpg' }} />
    </Card>
  )
}

export default ImageSettingsScreen;
