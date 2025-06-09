import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

import axios from 'axios';

export default function HomeScreen() {
  const success = async () => {
    console.log('starting success call...');
    const res = await axios.get(
      "https://demo.komga.org/api/v2/users/me",
      {
        timeout: 10000,
        auth: {
          username: 'demo@komga.org',
          password: 'komga-demo',
        }
      }
    );
    console.log('success call finished');
    console.log(res.data);
  };

  const fail = async () => {
    console.log('starting fail call...');
    const res = await axios.get(
      "https://demo.komga.org/api/v2/users/me",
      {
        timeout: 10000, // Uncomment this line to see request hang
        auth: {
          username: 'invalid@komga.org',
          password: 'invalid',
        }
      }
    ).catch(console.error);
    console.log('fail call finished');
    console.log(res?.data);
  };

  return (
    <SafeAreaView>
      <Pressable onPress={success} style={styles.button}>
        <Text>Success</Text>
      </Pressable>
      <Pressable onPress={fail} style={styles.button}>
        <Text>Fail</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
    marginTop: 16,
  },
});
