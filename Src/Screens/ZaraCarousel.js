import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDECATOR = DOT_SIZE + DOT_SPACING;

const images = [
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445',
];

const product = {
  title: 'SOFT MINI CROSSBODY BAG WITH KISS LOCK',
  description: [
    'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
    'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
  ],
  price: '29.99£',
};

const ZaraCarousel = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={{height: ITEM_HEIGHT, overflow: 'hidden'}}>
        <Animated.FlatList
          data={images}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate={'fast'}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          renderItem={({item}) => {
            return (
              <Image
                source={{uri: item}}
                style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  resizeMode: 'cover',
                }}
              />
            );
          }}
        />
        <View style={{position: 'absolute', top: ITEM_HEIGHT / 2, left: 20}}>
          {images.map((_, index) => {
            return (
              <View
                key={index}
                style={[
                  {
                    height: DOT_SIZE,
                    width: DOT_SIZE,
                    borderRadius: DOT_SIZE,
                    backgroundColor: '#333',
                    marginBottom: DOT_SPACING,
                  },
                ]}></View>
            );
          })}
          <Animated.View
            style={[
              {
                height: DOT_INDECATOR,
                width: DOT_INDECATOR,
                borderRadius: DOT_INDECATOR,
                borderWidth: 1,
                borderColor: '#333',
                position: 'absolute',
                top: -DOT_SIZE / 2,
                left: -DOT_SIZE / 2,
              },
              {
                transform: [
                  {
                    translateY: Animated.divide(
                      scrollY,
                      ITEM_HEIGHT,
                    ).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDECATOR],
                    }),
                  },
                ],
              },
            ]}></Animated.View>
        </View>
      </View>
    </View>
  );
};

export default ZaraCarousel;
