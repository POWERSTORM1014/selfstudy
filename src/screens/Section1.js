import React from 'react'
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

// Get device window width and height
const { width, height } = Dimensions.get('window')

export default function Section1() {
  return (
    <ImageBackground
      source={{
        uri: 'https://powerstorm1014.github.io/homepage/assets/images/selfstudy-002.png',
      }}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
    >
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <Swiper autoplay={true} style={{ height: 200 }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={{
                uri: 'https://powerstorm1014.github.io/homepage/assets/images/movie_001.png',
              }}
              style={{ width: width, height: height * 0.3 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={{
                uri: 'https://powerstorm1014.github.io/homepage/assets/images/hint_001.png',
              }}
              style={{ width: width, height: height * 0.3 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={{
                uri: 'https://powerstorm1014.github.io/homepage/assets/images/game_001.png',
              }}
              style={{ width: width, height: height * 0.3 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={{
                uri: 'https://powerstorm1014.github.io/homepage/assets/images/shadowing_001.png',
              }}
              style={{ width: width, height: height * 0.3 }}
              resizeMode="cover"
            />
          </View>
        </Swiper>
        <Text>Self Study와 함께이기에 가능합니다!!!</Text>
      </View>
    </ImageBackground>
  )
}
