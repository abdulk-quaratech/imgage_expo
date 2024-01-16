import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import FileUpload from "./FileUpload";

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.subheading}>
          Select Photo From Galary!
      </Text>
     <FileUpload/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});