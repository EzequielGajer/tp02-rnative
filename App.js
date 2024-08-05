import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Screens del Primer Stack
function ScreenA1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME</Text>
      <TextInput style={styles.input} placeholder="Enter something" />
      <Button title="Go to HOME 2" onPress={() => navigation.navigate('ScreenA2')} />
    </View>
  );
}

function ScreenA2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME 2</Text>
      <TextInput style={styles.input} placeholder="Enter something else" />
      <Button title="Go back to HOME" onPress={() => navigation.navigate('ScreenA1')} />
    </View>
  );
}

// Screens del Segundo Stack
function ScreenB1() {
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>SEARCH</Text>
      <TextInput style={styles.input} placeholder="Search something" />
      <Button title="Go to SEARCH 2" onPress={() => navigation.navigate('ScreenB2')} />
    </View>
  );
}

function ScreenB2() {
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>SEARCH 2</Text>
      <TextInput style={styles.input} placeholder="Search something else" />
      <Button title="Go back to SEARCH" onPress={() => navigation.navigate('ScreenB1')} />
    </View>
  );
}

// Screens del Tercer Stack
function ScreenC1() {
  const navigation = useNavigation();
  return (
    <View style={styles.profileScreen}>
      <Text style={styles.text}>PROFILE</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <Button title="Go to PROFILE 2" onPress={() => navigation.navigate('ScreenC2')} />
    </View>
  );
}

function ScreenC2() {
  const navigation = useNavigation();
  return (
    <View style={styles.profileScreen}>
      <Text style={styles.text}>PROFILE 2</Text>
      <TextInput style={styles.input} placeholder="Enter your age" />
      <Button title="Go back to PROFILE" onPress={() => navigation.navigate('ScreenC1')} />
    </View>
  );
}

// Creación de los stacks
const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

// Creación del BottomTabNavigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackANavigator} options={{ tabBarIcon: ({ color }) => (<Ionicons name="home" size={24} color={color} />) }} />
      <Tab.Screen name="Search" component={StackBNavigator} options={{ tabBarIcon: ({ color }) => (<Ionicons name="search" size={24} color={color} />) }} />
      <Tab.Screen name="Profile" component={StackCNavigator} options={{ tabBarIcon: ({ color }) => (<Ionicons name="person" size={24} color={color} />) }} />
    </Tab.Navigator>
  );
}

// Envolviendo la aplicación en el NavigationContainer
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  searchScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff00',
  },
  profileScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: 'white',
  },
});
