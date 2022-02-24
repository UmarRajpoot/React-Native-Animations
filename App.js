import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './Src/MainScreen';
import GalleryView from './Src/Screens/GalleryView';
import CarouselAnimation from './Src/Screens/CarouselAnimation';
import ZaraCarousel from './Src/Screens/ZaraCarousel';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Flat List" component={MainScreen} />
        <Stack.Screen name="Gallery" component={GalleryView} />
        <Stack.Screen name="carousel" component={CarouselAnimation} />
        <Stack.Screen name="zaracarousel" component={ZaraCarousel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
