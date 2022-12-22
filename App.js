import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './login';
import apps from './apps';
import logout from './logout';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOption={{
      headerTitle: '',
      headerTransparent: true,
    }}>
      <Stack.Screen name="login" component={login} option={{headerShown: false,}} />
      <Stack.Screen name="apps" component={apps} />
      <Stack.Screen name="logout" component={logout} />
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}