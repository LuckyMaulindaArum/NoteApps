import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <View>
      <TouchableOpacity onPress={toggleAlert}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <FancyAlert
        visible={visible}
        icon={<View style={{
          flex: 9,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#850E35',
          borderRadius: 50,
          width: '100%',
        }}><Text>you have been logout the application🤗</Text></View>}
        style={{ backgroundColor: '#FFC4C4' }}
      >
        <Text style={{ marginTop: 100, marginBottom: 100 }}>you have been logout the application</Text>
      </FancyAlert>
    </View>
  )
}

export default App;