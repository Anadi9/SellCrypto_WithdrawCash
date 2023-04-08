import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import email from 'react-native-email';

function SellCryptoRequest({totalCryptoBalance, setTotalCryptoBalance}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [value, setValue] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const sliderValues: number[] = [0.1, 0.25, 1];
  const selectedAmount = Math.round(selectedPercentage * totalCryptoBalance);

  const styles = StyleSheet.create({
    card: {
      marginTop: 30,
      width: 300,
      height: 130,
      borderRadius: 10,
      backgroundColor: 'rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'row',
    },
    cardTitle: {
      color: 'rgba(0,0,0,0.6)',
      fontSize: 12,
      fontWeight: '500',
    },
    totalCryptoBalance: {
      color: 'orange',
      fontSize: 25,
      fontWeight: '900',
    },
    cardLeft: {
      width: 170,
      paddingLeft: 20,
      //   alignItems: 'center',
      justifyContent: 'center',
    },
    cardRight: {
      width: 130,
    },
    bottomDiv: {
      width: 300,
      padding: 10,
      //   backgroundColor: '#000000',
    },
    blueText: {
      marginTop: 20,
      color: 'dodgerblue',
      fontSize: 14,
      fontWeight: '500',
    },
    inputText: {
      marginTop: 20,
      color: 'grey',
      fontSize: 12,
      fontWeight: '400',
    },
    cardImage1: {
      width: 130,
      height: 130,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
    },
    sliderInput: {
      marginTop: 20,
      width: 300,
      height: 40,
    },
    stepMarks: {
      width: 250,
      marginLeft: 30,
      marginBottom: 20,
      color: 'gray',
      marginTop: -10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sliderPercentage: {
      color: 'gray',
      fontSize: 12,
    },
    selectedPercentage: {
      color: 'darkgray',
      fontSize: 14,
      fontWeight: '500',
    },
    input: {
      marginTop: 20,
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.5)',
      color: '#000000',
      //   padding: 10,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      //   height: 120,
      width: 250,
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonSubmit: {
      marginTop: 40,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: selectedAmount === 0 ? 'rgba(0,0,0,0.1)' : '#2196F3',
      width: 100,
      height: 40,
      borderRadius: 50,
    },
    buttonClose: {
      borderColor: '#2196F3',
      borderWidth: 1,
      backgroundColor: '#eeeeee',
      paddingHorizontal: 7,
      paddingVertical: 2,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
    },
    textStyle: {
      color: '#2196F3',
      fontWeight: '900',
      textAlign: 'center',
    },
    modalText: {
      marginTop: 10,
      marginBottom: 5,
      textAlign: 'center',
      color: 'rgba(0,0,0,0.5)',
    },
    modalTextAmount: {
      color: 'orange',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '900',
    },
    emailLabel: {
      marginTop: 10,
      marginBottom: 5,
      //   textAlign: 'center',
      color: 'rgba(0,0,0,0.5)',
    },
    emailInput: {
      //   marginTop: 10,
      height: 35,
      width: 200,
      margin: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.5)',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      color: '#000000',
      backgroundColor: '#eeeeee',
      padding: 2,
    },
    buttonSell: {
      marginTop: 10,
      marginBottom: 20,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: '#2196F3',
      width: 100,
      height: 40,
      borderRadius: 50,
    },
  });

  const handleEmail = () => {
    const to = [{userEmail}]; // string or array of email addresses
    email(to, {
      // Optional additional arguments
      // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
      bcc: 'mee@mee.com', // string or array of email addresses
      subject: 'Crypto Billing Notification',
      body: 'Some body right here',
      checkCanOpen: false, // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error);
  };

  const getNearestStep = (val: number) => {
    const closestValue = sliderValues.reduce((prev, curr) =>
      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev,
    );
    return closestValue;
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.cardTitle}>Total Crypto Balance</Text>
          <Text style={styles.totalCryptoBalance}>{totalCryptoBalance}</Text>
        </View>
        <View style={styles.cardRight}>
          <Image
            source={require('../assets/cardImg1.jpg')}
            style={styles.cardImage1}
          />
        </View>
      </View>
      <View style={styles.bottomDiv}>
        <Text style={styles.blueText}>How Much want To Sell?</Text>
        <Text style={styles.inputText}>Slide and adjust your amount</Text>
        <Slider
          style={styles.sliderInput}
          minimumValue={0}
          maximumValue={1}
          step={getNearestStep(value)}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="grey"
          thumbTintColor="dodgerblue"
          value={value}
          onValueChange={val => {
            setValue(val);
            setSelectedPercentage(val);
          }}
        />
        <View style={styles.stepMarks}>
          <Text style={[styles.sliderPercentage]}>10%</Text>
          <Text style={styles.sliderPercentage}>25%</Text>
          <Text style={styles.sliderPercentage}>50%</Text>
          <Text style={styles.sliderPercentage}>75%</Text>
          <Text style={styles.sliderPercentage}>100%</Text>
        </View>
        <Text style={styles.selectedPercentage}>
          Selected Percentage: {selectedPercentage * 100}%
        </Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          value={selectedAmount.toString()}
        />
        <Pressable
          disabled={selectedAmount === 0 ? true : false}
          style={[styles.button, styles.buttonSubmit]}
          onPress={() => setModalVisible(true)}>
          <Text>Submit</Text>
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>x</Text>
              </Pressable>
              <Text style={styles.modalText}>Seeling crypto worth :</Text>
              <Text style={styles.modalTextAmount}>{selectedAmount}</Text>
              <Text style={styles.emailLabel}>Enter your email:</Text>
              <TextInput
                style={styles.emailInput}
                autoFocus
                onChangeText={val => setUserEmail(val)}
              />
              <Pressable
                style={[styles.button, styles.buttonSell]}
                onPress={() => handleEmail()}>
                <Text>Sell</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default SellCryptoRequest;
