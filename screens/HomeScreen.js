import React from "react";
import { View, StyleSheet, Button } from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";
import { verifyWithEmail } from "../components/Firebase/firebase";
import { userEmail } from "../components/Firebase/firebase";

export default function HomeScreen() {
  useStatusBar("dark-content");
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  async function confirmEmailverified() {
    try {
      //await verifyWithEmail;
      alert(userEmail);
      //alert("E-mail for verifing was sent");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
      <Button title="Verify Email" onPress={confirmEmailverified} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
