import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SellAndWithdrawScreen from './components/SellAndWithdrawScreen';

function SellAndWithdraw() {
  return <SellAndWithdrawScreen />;
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sell & Withdraw" component={SellAndWithdraw} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
