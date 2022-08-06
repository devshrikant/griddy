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

const HomeScreen = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(15);
  const [cwidth, setCWidth] = useState(100 / rows);
  //   const [cwidth, setCWidth] = useState(wp(100) / rows);
  //   const [cheight, setCheight] = useState(wp(141.42) / cols);
  const [cheight, setCheight] = useState(141.42 / cols);
  const [cborder, setCborder] = useState(1);
  const [cangle, setCangle] = useState(
    (Math.atan(cwidth / cheight) * 180) / Math.PI,
  );

  const [cdia, setCdia] = useState(
    Math.sqrt(Math.pow(cwidth, 2) + Math.pow(cheight, 2)),
  );

  const [lmar, setLmar] = useState((cdia - cwidth) / 2);

  //   const [cdia, setCdia] = useState(
  //     Math.sqrt(Math.pow(cwidth, 2) + Math.pow(cheight, 2)),
  //   );
  //   const [cheight, setCheight] = useState(
  //     (wp(141.42) / cols / wp(141.42)) * 100,
  //   );

  useEffect(() => {
    console.log(cwidth, cheight, cdia);
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

  return (
    <View
      style={{
        // flex: 1,
        width: wp(100),
        height: hp(100),
        // backgroundColor: 'pink'
      }}>
      <ScrollView
        contentContainerStyle={
          {
            // flex: 1,
            // width: wp(100),
            // height: hp(100),
          }
        }>
        <Text>HomeScreen</Text>

        <View
          style={{
            marginVertical: wp(10),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={onIncrease}
            style={{
              paddingVertical: wp(3),
              paddingHorizontal: wp(5),
              backgroundColor: 'skyblue',
            }}>
            <Text>Increase</Text>
          </Pressable>
          <Text>{rows}</Text>
          <Pressable
            onPress={onDecrease}
            style={{
              paddingVertical: wp(3),
              paddingHorizontal: wp(5),
              backgroundColor: 'skyblue',
            }}>
            <Text>Decrease</Text>
          </Pressable>
        </View>

        {/* GRID SHOW VIEW */}
        <View
          style={{
            width: wp(100),
            height: wp(141.42),
            //   backgroundColor: 'red',
            position: 'relative',
          }}>
          {/* IMAGE VIEW */}
          <Image
            style={{
              flex: 1,
              zIndex: 5,
            }}
            source={{
              uri: 'https://i.pinimg.com/736x/80/57/39/8057394c0229fb19ba991e01925d96b8.jpg',
            }}
          />

          <View
            style={{
              width: wp(100),
              height: wp(141.42),
              // height: '100%',
              position: 'absolute',
            //   backgroundColor: 'pink',
              zIndex: 10,
              top: 0,
              flexWrap: 'wrap',
              flexDirection: 'row',
                // opacity: 0.5,
                // opacity: 0,
            }}>
            {Array(rows * cols).fill(
              <SingleGrid
                cwidth={cwidth}
                cheight={cheight}
                cdia={cdia}
                lmar={lmar}
                cangle={cangle}
                cborder={cborder}
              />,
            )}
            {/*             
          {Array(cols).fill(
            Array(rows).fill(<SingleGrid cwidth={cwidth} cheight={cheight} />),
          )} */}

            {/* <SingleGrid cwidth={cwidth} /> */}
          </View>
        </View>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </ScrollView>
    </View>
  );
};

const SingleGrid = props => {
  return (
    <View
      style={{
        width: wp(props.cwidth),
        height: wp(props.cheight),
        borderWidth: props.cborder,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        // alignItems: 'center',
        position: 'relative',
        // overflow: 'hidden',
        borderColor: 'lime'
      }}>
      <View
        style={{
          height: props.cborder,
          // borderWidth: 1,
          marginLeft: wp(-props.lmar),
          transform: [{rotateZ: `${90 - props.cangle}deg`}],
          width: wp(props.cdia) - props.cborder*2,
          backgroundColor: 'red',
          position: 'absolute',
        }}
      />
      <View
        style={{
          height: props.cborder,
          // borderWidth: 1,
          marginLeft: wp(-props.lmar),
          transform: [{rotateZ: `-${90 - props.cangle}deg`}],
          width: wp(props.cdia) - props.cborder*2,
          backgroundColor: 'red',
          position: 'absolute',
        }}
      />
    </View>
  );
};

export default HomeScreen;
