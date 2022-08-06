import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SettingScreen = () => {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  //   const [cwidth, setCWidth] = useState((wp(100) / rows / wp(100)) * 100);
  const [cwidth, setCWidth] = useState(50);
  const [cheight, setCheight] = useState(30);

  const [cangle, setCangle] = useState((Math.atan((cwidth)/(cheight)))* 180 / Math.PI)

  const [cdia, setCdia] = useState(
    Math.sqrt(Math.pow(cwidth, 2) + Math.pow(cheight, 2)),
  );
  // const [lmar, setLmar] = useState(10.35534)

  const [lmar, setLmar] = useState((cdia-cwidth)/2)

  //   const [cheight, setCheight] = useState(
  //     (wp(141.42) / cols / wp(141.42)) * 100,
  //   );

  useEffect(() => {
    console.log(cwidth, cheight, cdia, lmar, cangle);
    return () => {};
  }, []);

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
      <View style={{
        width: wp(cwidth),
        height: wp(cheight),
        borderWidth: 2,
        justifyContent: 'center',
        backgroundColor: 'pink',
        position: 'relative',
      }}>
        <View style={{
          height: 2,
          // borderWidth: 1,
          marginLeft: wp(-lmar),
          transform: [{rotateZ: `${90-cangle}deg`}],
          // transform: [{rotateZ: `36deg`}],
          width: wp(cdia)-4,
          backgroundColor: 'black',
          position: 'absolute',
        }} />
      </View>
    </View>
  );
};

export default SettingScreen;
