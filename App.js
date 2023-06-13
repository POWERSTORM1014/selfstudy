import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Section1 from './src/screens/Section1'
import Section2 from './src/screens/Section2'
import Section3 from './src/screens/Section3'
import Section4 from './src/screens/Section4'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Section 1" component={Section1} />
        <Tab.Screen name="Section 2" component={Section2} />
        <Tab.Screen name="Section 3" component={Section3} />
        <Tab.Screen name="Section 4" component={Section4} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
