import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

import axios from 'axios';

const SERVER = 'http://<ip_address>:3000'; // Replace with your server's IP address

export default function HomeScreen() {
  const success = async () => {
    console.log('starting success call...');
    const res = await axios.get(
      `${SERVER}/success`,
      { timeout: 10000 }
    );
    console.log('success call finished');
    console.log(res.data);
  };

  const failWithHeader = async () => {
    console.log('starting fail w/ header call...');
    const res = await axios.get(
      `${SERVER}/fail-header`,
      { timeout: 10000 } // Comment this line to see the request fail to resolve with the debugger
    ).catch(console.error);
    console.log('fail call finished');
    console.log(res?.data);
  };

  const failWithoutHeader = async () => {
    console.log('starting fail w/o call...');
    const res = await axios.get(
      `${SERVER}/fail-no-header`,
      { timeout: 10000 }
    ).catch(console.error);
    console.log('fail call finished');
    console.log(res?.data);
  };

  return (
    <SafeAreaView>
      <Pressable onPress={success} style={styles.button}>
        <Text>Success</Text>
      </Pressable>
      <Pressable onPress={failWithoutHeader} style={styles.button}>
        <Text>Fail W/O Header</Text>
      </Pressable>
      <Pressable onPress={failWithHeader} style={styles.button}>
        <Text>Fail W/ Header</Text>
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
