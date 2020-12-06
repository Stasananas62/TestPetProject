import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

import Input from '../common/input.js';

const HomePage = () => {
const [name, setName] = useState('')

  return (
    <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setName}
          value={name}
        />
        <Input onPress={()=>{}} value={name} label={'Login'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width:'90%',
  },
});

export default HomePage;
