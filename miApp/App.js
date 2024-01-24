import { StyleSheet, Text, View } from 'react-native';



const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola, Coder!</Text>
    </View>
  );
}

export default App 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
  },
});
