import * as React from 'react';
import { Text, View, TextInput, Pressable, Animated, Easing, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';


export default function App() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const animationVariable = React.useRef(new Animated.Value(0)).current;
  
  const runAnimation = (toVal) => {
    Animated.spring(animationVariable, {
        toValue : toVal,
        useNativeDriver: false,
    
    }).start();
     navigation.navigate('apps');
  } 

  return (
    <Animated.View
      style={{
        padding: 20,
        backgroundColor: animationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['#FFFFFF', '#FFFFFF'],
                            extrapolate: 'clamp',
                          }),
        flex: 1,
        justifyContent: 'center',
      }}>

      <Image 
        source = {require('./assets/images.png')}
          style={{
          right: -137,
          width:75,
          height: 75,
          marginTop:40,
          paddingLeft:10,
          paddingRight:10
          
      }}>
      </Image>

      <Text style={{
        alignSelf: 'center',
        fontSize: 30,
        marginBottom: 50,
        color: '#CC9900',
        fontWeight: '600',
      }}>Login</Text>
      <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
        <Icon name="email" size={30} color={'#CC9900'} />
        <TextInput
          textContentType={'emailAddress'}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCompleteType={'email'}
          clearButtonMode={'while-editing'}
          keyboardType={'email-address'}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          placeholder={'email address'}
          style={{
            flex: 1,
            paddingLeft: 15,
            borderBottomColor: '#CC9900',
            borderBottomWidth: 1,
          }}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
        <Icon name="key" size={30} color={'#CC9900'} />
        <TextInput
          textContentType={'password'}
          onChangeText={(text) => setPass(text)}
          value={pass}
          autoCompleteType={'password'}
          clearButtonMode={'while-editing'}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          placeholder={'password'}
          secureTextEntry={true}
          style={{
            flex: 1,
            paddingLeft: 20,
            borderBottomColor: '#CC9900',
            borderBottomWidth: 1,
          }}
        />
      </View>
      <View style={{
        alignSelf: 'center',
        marginTop: 30,
      }}>
        <Pressable
          onPress={() => runAnimation(1)}
        >
          <Animated.View style={{
            width: animationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [120, 60],
                            extrapolate: 'clamp',
                          }),
            height: animationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [40, 60],
                            extrapolate: 'clamp',
                          }),
            borderRadius: animationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [8, 60],
                            extrapolate: 'clamp',
                          }),
            elevation: 8,
            shadowColor: '#ffff',
            shadowRadius: 8,
            backgroundColor: animationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['#CC9900', '#FFF5E4'],
                            extrapolate: 'clamp',
                          }),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Animated.View style={{
                  position: 'absolute',
                  opacity: animationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1],
                                extrapolate: 'clamp',
                            }),
                }}>
              <Icon name="lock" size={30} color={'#CC9900'} />
            </Animated.View>
            <Animated.Text style={{
              color: '#FF94CC',
              position: 'absolute',
              opacity: animationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0],
                            extrapolate: 'clamp',
                        }),
            }}>Login</Animated.Text>
          </Animated.View>
        </Pressable>
      </View>
    </Animated.View>
  );
}
