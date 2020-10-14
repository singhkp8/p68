import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import facebook from "./screens/facebook";
import instragram from "./screens/instragram";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  FB : { screen: facebook },
  IN : { screen: instragram },
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
