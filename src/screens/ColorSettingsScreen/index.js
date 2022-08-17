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
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
  Predator,
  ColorTone,
  DuoTone,
  Vintage,
  Nightvision,
  Protanomaly,
  Achromatomaly,
  Achromatopsia,
  Deuteranomaly,
  Browni,
} from 'react-native-color-matrix-image-filters';

import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Switch,
} from 'react-native-paper';

// const LeftContent = ;
// const LeftContent2 =;

const ColorSettingsScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);



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

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <>
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Color Setup" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <View
        style={{
          // backgroundColor: 'pink',
          width: wp(100),
          height: hp(80),
        }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: wp(5),
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
              Grid Settings
            </Title>
            <View
              style={{
                flex: 1,
                marginTop: wp(0),
              }}>
              <Card.Title
                title="Show Grids"
                // subtitle="Draw using images from Gallery & Google Photos"
                subtitleNumberOfLines={2}
                left={props => <Avatar.Icon {...props} icon="image-multiple" />}
                right={props => <View style={{
                  marginRight: wp(5)
                }}><Switch value={isSwitchOn} onValueChange={onToggleSwitch} /></View>}
              />
            </View>

            <View
              style={{
                flex: 1,
                marginTop: wp(0),
              }}>
              <Card.Title
                title="Show Diagonals"
                // subtitle="Draw using images from Gallery & Google Photos"
                subtitleNumberOfLines={2}
                left={props => <Avatar.Icon {...props} icon="image-multiple" />}
                right={props => <View style={{
                  marginRight: wp(5)
                }}><Switch value={isSwitchOn} onValueChange={onToggleSwitch} /></View>}
              />
            </View>

            <View
              style={{
                flex: 1,
                marginTop: wp(0),
              }}>
              <Card.Title
                title="Show Radial Grid"
                // subtitle="Draw using images from Gallery & Google Photos"
                subtitleNumberOfLines={2}
                left={props => <Avatar.Icon {...props} icon="image-multiple" />}
                right={props => <View style={{
                  marginRight: wp(5)
                }}><Switch value={isSwitchOn} onValueChange={onToggleSwitch} /></View>}
              />
            </View>


            
            <View
              style={{
                flex: 1,
                marginTop: wp(0),
              }}>
              <Card.Title
                title="Show Row/Col Labels"
                // subtitle="Draw using images from Gallery & Google Photos"
                subtitleNumberOfLines={2}
                left={props => <Avatar.Icon {...props} icon="image-multiple" />}
                right={props => <View style={{
                  marginRight: wp(5)
                }}><Switch value={isSwitchOn} onValueChange={onToggleSwitch} /></View>}
              />
            </View>

            
          </View>

          <Title
            style={{
              marginTop: wp(5),
              marginLeft: wp(5),
            }}>
            Filters
          </Title>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {/* 1 */}
            <ImagePreview />
            {/* 2 */}
            <Grayscale>
              <ImagePreview />
            </Grayscale>
            {/* 3 */}
            <Sepia>
              <ImagePreview />
            </Sepia>
            {/* 4 */}
            <Deuteranomaly>
              <ImagePreview />
            </Deuteranomaly>
            {/* 5 */}
            <Tint amount={1.25}>
              <ImagePreview />
            </Tint>
            {/* 6 */}
            <Achromatomaly>
              <ImagePreview />
            </Achromatomaly>
            {/* 7 */}
            <Protanomaly>
              <ImagePreview />
            </Protanomaly>
            {/* 8 */}
            <Achromatopsia>
              <ImagePreview />
            </Achromatopsia>
            {/* 9 */}
            <Vintage>
              <ImagePreview />
            </Vintage>
            {/* 10 */}
            <Browni>
              <ImagePreview />
            </Browni>


          </View>
        </ScrollView>
      </View>
    </>
  );
};

const ImagePreview = (props) => {
  return (
    <View
      style={{
        position: 'relative',
      }}>
      <View
        style={{
          width: wp(42.5),
          height: wp(42.5),
          backgroundColor: 'transparent',
          flex: 1,
          position: 'absolute',
          zIndex: 10,
          marginLeft: wp(5),
          marginTop: wp(5),
          overflow: 'hidden',
          alignItems: 'center',
        }}>
        <Avatar.Icon
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            margin: wp(3),
          }}
          size={wp(6)}
          color={'white'}
          icon="check-bold"
        />

        <Text
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            bottom: wp(2),
            // borderRadius: wp(1),
            textAlign: 'center',
            fontWeight: 'bold',
            paddingHorizontal: wp(2),
            fontSize: wp(3.6),
            opacity: 0.8,
          }}>
          Grayscale
        </Text>
      </View>

      <Card
        style={{
          width: wp(42.5),
          height: wp(42.5),
          marginLeft: wp(5),
          marginTop: wp(5),
          backgroundColor: 'white',
          overflow: 'hidden',
          zIndex: 5,
        }}>
        <Image
          style={{
            flex: 1,
          }}
          source={{
            uri: 'https://img5.goodfon.com/wallpaper/nbig/e/76/amanda-cerny-devushka-kosy-maika-vzgliad.jpg',
          }}
        />
      </Card>
    </View>
  );
};

export default ColorSettingsScreen;
