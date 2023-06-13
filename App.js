import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Section1 from './src/screens/Section1'
import Section2 from './src/screens/Section2'
import Section3 from './src/screens/Section3'
import Section4 from './src/screens/Section4'
import Section5 from './src/screens/Section5'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="자학자습안내" component={Section1} />
        <Tab.Screen name="개념강의" component={Section2} />
        <Tab.Screen name="문제풀이힌트" component={Section3} />
        <Tab.Screen name="스피드게임" component={Section4} />
        <Tab.Screen name="쉐도잉훈련" component={Section5} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
