import { StyleSheet, Text, View } from 'react-native';

import * as Lexical from 'lexical';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Lexical.hello()}</Text>
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
