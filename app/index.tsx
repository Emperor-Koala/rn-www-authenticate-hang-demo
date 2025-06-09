import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

const SERVER = 'http://192.168.0.82:3000'; // Replace with your server's IP address

export default function HomeScreen() {
  const success = async () => {
    console.log('starting success call...');
    try {
      const res = await fetch(`${SERVER}/success`);
      console.log('success call finished');
      console.log(res);
    } catch (error) {
      console.error('Error during fetch:', error);
      return;
    }
  };

  const failWithHeader = async () => {
    console.log('starting fail w/ header call...');
    try {
      const res = await fetch(`${SERVER}/fail-header`);
      console.log('fail call finished');
      console.log(res);
    } catch (error) {
      console.error('Error during fetch:', error);
      return;
    }
  };

  const failWithoutHeader = async () => {
    try {
      const res = await fetch(`${SERVER}/fail-no-header`);
      console.log('fail with header call finished');
      console.log(res);
    } catch (error) {
      console.error('Error during fetch:', error);
      return;
    }
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
