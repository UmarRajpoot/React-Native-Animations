import React from 'react';
import {Button, Text, View} from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Flat List Animations</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title={'gallery view'}
          onPress={() => navigation.navigate('Gallery')}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button
          title={'Carousel view'}
          onPress={() => navigation.navigate('carousel')}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button
          title={'Zara Carousel'}
          onPress={() => navigation.navigate('zaracarousel')}
        />
      </View>
    </View>
  );
};

export default MainScreen;
