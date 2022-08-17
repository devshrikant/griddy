import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ImagePicker from 'react-native-image-crop-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TestScreen = () => {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedImage, setSelectedImage] = useState('file:///data/user/0/com.griddy/cache/react-native-image-crop-picker/2ace9730-08b0-4f81-a87a-37bcf7de659b.jpg')

  //   const [cwidth, setCWidth] = useState((wp(100) / rows / wp(100)) * 100);
  const [cwidth, setCWidth] = useState(50);
  const [cheight, setCheight] = useState(30);

  const [cangle, setCangle] = useState(
    (Math.atan(cwidth / cheight) * 180) / Math.PI,
  );

  const [cdia, setCdia] = useState(
    Math.sqrt(Math.pow(cwidth, 2) + Math.pow(cheight, 2)),
  );
  // const [lmar, setLmar] = useState(10.35534)

  const [lmar, setLmar] = useState((cdia - cwidth) / 2);

  //   const [cheight, setCheight] = useState(
  //     (wp(141.42) / cols / wp(141.42)) * 100,
  //   );

  useEffect(() => {
    console.log(cwidth, cheight, cdia, lmar, cangle);
    return () => {};
  }, []);

  const handleOpenGallery = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
      setSelectedImage(image.path);
    });
  };

  const handleOpenCamera = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      // setSelectedImage(image.path);
    });
  };

  return (
    <View
      style={{
        // flex: 1,
        width: wp(100),
        height: hp(100),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink'
      }}>
      <Text>Switching Positions</Text>
      <Button onPress={handleOpenGallery} title={'Cheems Gallery'} />
      <Button onPress={handleOpenCamera} title={'Cheems Camera'} />

      <Image
        resizeMode="contain"
        style={{
          width: wp(100),
          height: hp(80),
          // flex: 1,
          // backgroundColor: 'pink',
        }}
        source={{uri: selectedImage}}
      />
    </View>
  );
};

export default TestScreen;
