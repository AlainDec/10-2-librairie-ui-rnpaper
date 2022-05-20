import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';
import Nav from '../components/Nav';


export default function App() {

  return (
    <>
      <Header />
      <Nav />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    padding: 10,
  },
  titleH1: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
