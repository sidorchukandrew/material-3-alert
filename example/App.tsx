import { StyleSheet, Text, View } from 'react-native';

import * as Material3Alert from 'material-3-alert';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Material3Alert.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
