import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Alert,
  Image,
  Text,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import email from 'react-native-email';

function WithdrawCash({totalCashBalance, setTotalCashBalance}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [userEmail, setUserEmail] = useState('');

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
    totalCashBalance: {
      color: 'green',
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
    cardImage2: {
      width: 130,
      height: 130,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
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
      backgroundColor: withdrawAmount === 0 ? 'rgba(0,0,0,0.1)' : '#2196F3',
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
      color: 'green',
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
    buttonWithdraw: {
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

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.cardTitle}>Total Cash Balance</Text>
          <Text style={styles.totalCashBalance}>{totalCashBalance}</Text>
        </View>
        <View style={styles.cardRight}>
          <Image
            source={require('../assets/cardImg2.jpg')}
            style={styles.cardImage2}
          />
        </View>
      </View>
      <View style={styles.bottomDiv}>
        <Text style={styles.blueText}>Withdraw your amount</Text>
        <Text style={styles.inputText}>You can below enter your amount</Text>
        <TextInput
          cursorColor="gray"
          style={styles.input}
          //   placeholder={'Amount'}
          //   value={withdrawAmount.toString()}
          onChangeText={value => {
            setWithdrawAmount(Number(value));
          }}
        />
        <Pressable
          disabled={withdrawAmount === 0 ? true : false}
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
              <Text style={styles.modalTextAmount}>{withdrawAmount}</Text>
              <Text style={styles.emailLabel}>Enter your email:</Text>
              <TextInput
                cursorColor="gray"
                style={styles.emailInput}
                autoFocus
              />
              <Pressable
                style={[styles.button, styles.buttonWithdraw]}
                onPress={() => handleEmail()}>
                <Text>Withdraw</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default WithdrawCash;
