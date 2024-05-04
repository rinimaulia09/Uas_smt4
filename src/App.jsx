import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Profil from './screens/Profil'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notifikasi from './screens/Notifikasi'
import Pesanan from './screens/Pesanan'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
      
      }} />
      <Tab.Screen name='Pesanan' component={Pesanan} options={{
          tabBarLabel: 'Pesanan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="text-box" color={color} size={26} />
          ),
      
      }} />
     
      <Tab.Screen name='Notifikasi' component={Notifikasi} options={{
          tabBarLabel: 'Notifikasi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
      
      }} />

      <Tab.Screen name='Profil' component={Profil} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
      
      }} />
      
    </Tab.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})