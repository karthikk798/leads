<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import {TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ViewScreen from './screens/ViewScreen';
import FollowUpScreen from './screens/FollowUpScreen';
import DashboardScreen from './screens/DashboardScreen';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
  Home: undefined;
  FollowUpScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
     <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: 'yellow' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#f4f4f4' },
        tabBarActiveTintColor: '#0c63e7',
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Dashboard') {
            iconName = 'home-outline';
          } else if (route.name === 'View') {
            iconName = 'reader-outline';
          } else {
            iconName = 'ellipse-outline'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
  name="Dashboard"
  component={DashboardScreen}
  options={{
    headerTitleAlign: 'center', 
  }}
/>
      <Tab.Screen
  name="View"
  component={ViewScreen}
  options={({ navigation }) => ({
    title: 'Leads',
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.iconButton}
      >
        <Ionicons name="add" size={20} color="#0c63e7" />
      </TouchableOpacity>
    ),
  })}
/>
    </Tab.Navigator>
  );
}
=======
import { View, Text } from 'react-native'
import React from 'react'
>>>>>>> 8060f6d8e972b6f338677dc0c04fff08d21a4053

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#0c63e7',
    borderWidth: 1,
    marginRight: 10,
  },
  headerButtonText: {
    color: '#0c63e7',
    fontWeight: 'bold',
    fontSize: 14,
  },
  iconButton: {
  backgroundColor: '#ffffff',         
  borderRadius: 20,                   
  padding: 6,                         
  marginRight: 10,                    
  borderWidth: 1.5,                   
  borderColor: '#0c63e7',             
  justifyContent: 'center',
  alignItems: 'center',
},

});

export default App;


=======
export default App
>>>>>>> 8060f6d8e972b6f338677dc0c04fff08d21a4053
