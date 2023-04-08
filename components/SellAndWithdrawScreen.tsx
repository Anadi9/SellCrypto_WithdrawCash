import React, {useState} from 'react';
// import {Image} from 'react-native';
// import Slider from '@react-native-community/slider';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  // useColorScheme,
  View,
} from 'react-native';
// import {TextInput} from 'react-native';
import SellCryptoRequest from './SellCryptoRequest';
import WithdrawCash from './WithdrawCash';

function SellAndWithdrawScreen(): JSX.Element {
  const [isActive, setIsActive] = useState('First');
  const [totalCryptoBalance, setTotalCryptoBalance] = useState(35000);
  const [totalCashBalance, setTotalCashBalance] = useState(120000);
  //   const [sellAmount, setSellAmount] = useState(0);

  const styles = StyleSheet.create({
    sellAndWithdrawScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    tabsbg: {
      marginTop: 15,
      width: 300,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'row',
    },
    tabsButton1: {
      width: '50%',
      backgroundColor: isActive === 'First' ? 'rgba(0,0,0,0.8)' : 'transparent',
      color: isActive === 'First' ? '#ffffff' : 'rgba(0,0,0,0.8)',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabsButton2: {
      width: '50%',
      backgroundColor:
        isActive === 'Second' ? 'rgba(0,0,0,0.8)' : 'transparent',
      color: isActive === 'Second' ? '#ffffff' : 'rgba(0,0,0,0.8)',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    clickedTabsButton: {
      backgroundColor: '#000000',
    },
    tabsBtnText1: {
      color: isActive === 'First' ? '#ffffff' : 'rgba(0,0,0,0.6)',
      fontSize: 13,
      fontWeight: '500',
    },
    tabsBtnText2: {
      color: isActive === 'Second' ? '#ffffff' : 'rgba(0,0,0,0.6)',
      fontSize: 13,
      fontWeight: '500',
    },
  });

  // eslint-disable-next-line react/no-unstable-nested-components
  //   function SellCryptoRequest() {
  //     const handleSliderChange = (value: string) => {
  //       let amount = 0;
  //       if (value === 0.1) {
  //           amount = totalCryptoBalance * 0.1;
  //           setTotalCryptoBalance(totalCryptoBalance - amount);
  //       } else if (value === 0.25) {
  //           amount = totalCryptoBalance * 0.25;
  //           setTotalCryptoBalance(totalCryptoBalance - amount);
  //       } else if (value === 1) {
  //           amount = totalCryptoBalance;
  //           setTotalCryptoBalance(totalCryptoBalance - amount);
  //       }
  //       setSellAmount(amount);
  //     };
  //     return (
  //       <View>
  //         <View style={styles.card}>
  //           <View style={styles.cardLeft}>
  //             <Text style={styles.cardTitle}>Total Crypto Balance</Text>
  //             <Text style={styles.totalCryptoBalance}>{totalCryptoBalance}</Text>
  //           </View>
  //           <View style={styles.cardRight}>
  //             <Image
  //               source={require('../assets/cardImg1.jpg')}
  //               style={styles.cardImage1}
  //             />
  //           </View>
  //         </View>
  //         <View style={styles.bottomDiv}>
  //           <Text style={styles.blueText}>How Much want To Sell?</Text>
  //           <Text style={styles.inputText}>Slide and adjust your amount</Text>
  //           <Slider
  //             style={styles.sliderInput}
  //             minimumValue={0.1}
  //             maximumValue={1}
  //             step={0.15}
  //             // lowerLimit={'25%'}
  //             minimumTrackTintColor="#000000"
  //             maximumTrackTintColor="grey"
  //             thumbTintColor="dodgerblue"
  //             value={totalCryptoBalance}
  //             onValueChange={value => handleSliderChange(value)}
  //           />
  //           <TextInput
  //             style={styles.input}
  //             placeholder="useless placeholder"
  //             value={sellAmount}
  //           />
  //         </View>
  //       </View>
  //     );
  //   }

  // eslint-disable-next-line react/no-unstable-nested-components
  //   function WithdrawCash() {
  //     return (
  //       <View>
  //         <View style={styles.card}>
  //           <View style={styles.cardLeft}>
  //             <Text style={styles.cardTitle}>Total Cash Balance</Text>
  //             <Text style={styles.totalCashBalance}>{totalCashBalance}</Text>
  //           </View>
  //           <View style={styles.cardRight}>
  //             <Image
  //               source={require('../assets/cardImg2.jpg')}
  //               style={styles.cardImage2}
  //             />
  //           </View>
  //         </View>
  //         <View style={styles.bottomDiv}>
  //           <Text style={styles.blueText}>Withdraw your amount</Text>
  //           <Text style={styles.inputText}>You can below enter your amount</Text>
  //           <TextInput
  //             style={styles.input}
  //             placeholder={'Amount'}
  //             value={'number'}
  //           />
  //         </View>
  //       </View>
  //     );
  //   }

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <View style={styles.sellAndWithdrawScreen}>
          <View style={styles.tabsbg}>
            <TouchableHighlight
              style={styles.tabsButton1}
              onPress={() => setIsActive('First')}>
              <Text style={styles.tabsBtnText1}>Sell Crypto Request</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.tabsButton2}
              onPress={() => setIsActive('Second')}>
              <Text style={styles.tabsBtnText2}>Withdraw Cash</Text>
            </TouchableHighlight>
          </View>
          {isActive === 'First' ? (
            <SellCryptoRequest
              totalCryptoBalance={totalCryptoBalance}
              setTotalCryptoBalance={setTotalCryptoBalance}
            />
          ) : (
            <WithdrawCash
              totalCashBalance={totalCashBalance}
              setTotalCashBalance={setTotalCashBalance}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SellAndWithdrawScreen;
