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

const HomeScreen = () => {
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(10);
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
    ToastAndroid.show(`Row ${r+1} Column ${c+1}`, ToastAndroid.SHORT);
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
      <ScrollView
        scrollEnabled={false}
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
        <ReactNativeZoomableView
          maxZoom={50}
          minZoom={1}
          zoomEnabled={true}
          //   zoomStep={0.5}
          initialZoom={1}
          movementSensibility={1}
          //   bindToBorders={true}
          //   onZoomAfter={this.logOutZoomState}
          style={
            {
              // padding: 10,
              // backgroundColor: 'red',
            }
          }>
          <View
            style={{
              width: wp(100),
              height: wp(141.42),
              //   backgroundColor: 'red',
              position: 'relative',
            }}>
            {/* TOP INDEX */}
            <View
              style={{
                position: 'absolute',
                top: 0,
                zIndex: 50,
                width: wp(100),
                height: wp(5),
                backgroundColor: 'grey',
                opacity: 0.4,
                flexDirection: 'row',
                // justifyContent: 'space-around',
              }}>
              {[...Array(rows)].map((v, i) => (
                <View
                key={i}
                  // opacity={0.9}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{i + 1}</Text>
                </View>
              ))}
            </View>

            {/* LEFT INDEX */}
            <View
              style={{
                position: 'absolute',
                top: 0,
                zIndex: 50,
                width: wp(5),
                height: wp(141.42),
                backgroundColor: 'grey',
                opacity: 0.4,
                flexDirection: 'column',
                // justifyContent: 'space-around',
              }}>
              {[...Array(cols)].map((v, i) => (
                <View
                key={i}
                  // opacity={0.9}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{i + 1}</Text>
                </View>
              ))}
            </View>

            {/* IMAGE VIEW */}
            <Image
              style={{
                flex: 1,
                zIndex: 5,
              }}
              source={{
                uri: 'https://images.mubicdn.net/images/cast_member/548545/cache-421034-1553070044/image-w856.jpg?size=800x',
                // uri: 'https://funroundup.com/wp-content/uploads/2020/11/Amanda-cerny-bikini-swimsuit.jpg',
                // uri: 'https://i.pinimg.com/736x/80/57/39/8057394c0229fb19ba991e01925d96b8.jpg',
              }}
            />

            {/* GRIDS */}
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
              {[...Array(cols)].map((val, r) =>
                [...Array(rows)].map((val, c) => (
                  <View
                    key={`${c}_${r}`}
                    // onPress={() => handleCellPress(c, r)}
                    >
                    <SingleGrid
                      showdia={showdia}
                    //   key={`${c}_${r}`}
                      cwidth={cwidth}
                      cheight={cheight}
                      cdia={cdia}
                      lmar={lmar}
                      cangle={cangle}
                      cborder={cborder}
                    />
                  </View>
                )),
              )}

              {/* {[...Array(cols * rows)].map(
                (v, i) => (
                  console.log('indexx', i + 1, ((cols * rows) % (i))),
                  (
                    <SingleGrid
                      showdia={showdia}
                      key={i}
                      cwidth={cwidth}
                      cheight={cheight}
                      cdia={cdia}
                      lmar={lmar}
                      cangle={cangle}
                      cborder={cborder}
                    />
                  )
                ),
              )} */}
            </View>
          </View>
        </ReactNativeZoomableView>
      </ScrollView>
    </View>
  );
};

const SingleGrid = props => {
  // console.log(props);
  return (
    <View
      style={{
        width: wp(props.cwidth),
        height: wp(props.cheight),
        borderWidth: props.cborder / 2,
        // borderLeftWidth: props.cborder,
        // borderTopWidth: props.cborder,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        // alignItems: 'center',
        position: 'relative',
        // overflow: 'hidden',
        borderColor: 'lime',
      }}>
      {props.showdia === true ? (
        <View
          style={{
            height: props.cborder,
            // borderWidth: 1,
            marginLeft: wp(-props.lmar),
            transform: [{rotateZ: `${90 - props.cangle}deg`}],
            width: wp(props.cdia) - props.cborder * 2,
            backgroundColor: 'red',
            position: 'absolute',
          }}
        />
      ) : (
        <></>
      )}
      {props.showdia === true ? (
        <View
          style={{
            height: props.cborder,
            // borderWidth: 1,
            marginLeft: wp(-props.lmar),
            transform: [{rotateZ: `-${90 - props.cangle}deg`}],
            width: wp(props.cdia) - props.cborder * 2,
            backgroundColor: 'red',
            position: 'absolute',
          }}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default HomeScreen;
