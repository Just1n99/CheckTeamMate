import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { getAuth } from 'firebase/auth'

export default function Profile() {
  const auth = getAuth();
  const onLogout = () => {
    auth.signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
})
