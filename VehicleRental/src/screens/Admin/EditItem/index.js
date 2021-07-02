import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import styles from './style.component';

const EditItem = () => {
  const [isEditItem, setIsEditItem] = useState(false);
  const [isActive, setIsActive] = useState(1);
  const [stock, setStock] = useState(12);
  const [modalVisible, setModalVisible] = useState(false);
  const [price, setPrice] = useState(10000);

  const minusButton = () => setStock(stock - 1);
  const plusButton = () => setStock(stock + 1);

  const minusHandler = () => {
    if (stock > 0) {
      minusButton();
    } else {
      ToastAndroid.show('Invalid stock', ToastAndroid.SHORT);
    }
  };

  const submitChanges = () => {
    setIsEditItem(false);
    setPrice(parseInt(price));
  };

  const modalYes = () => {
    setIsEditItem(false);
    setModalVisible(false);
  };

  const modalNo = () => {
    setModalVisible(!modalVisible);
  };

  const priceHandler = text => {
    setPrice(text);
    const result = text.length >= 4;
    if (result) {
      text.split('').slice(1);
    }
  };

  //   useEffect(() => {
  //     priceHandler();
  //   }, [price]);

  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#000" />
      <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Delete this item?</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '50%',
                }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={modalYes}>
                  <Text style={styles.textStyle}>Yes</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={modalNo}>
                  <Text style={styles.textStyle}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* GET ITEM WITH ID, IMAGE BG USING ITEM.PHOTO */}
          <ImageBackground
            style={styles.containerBg}
            source={require('../../../images/adminHome-bg.png')}>
            {/* NAVIGATION BUTTON BACK AND DELETE */}
            <View style={styles.topNavigation}>
              <TouchableOpacity>
                <Image
                  source={require('../../../images/left-arrow-white.png')}
                />
              </TouchableOpacity>
              {isEditItem ? (
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={styles.isEditBg}>
                  <Image source={require('../../../images/trash-bin.png')} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setIsEditItem(true)}
                  style={styles.isEditBg}>
                  {/* RATING ITEM */}
                  <Image source={require('../../../images/edit.png')} />
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>

          {/* RATING AND ITEM PRICE - NAME */}
          <View style={styles.priceRatingInfo}>
            {isEditItem ? (
              <View>
                <TextInput
                  style={styles.priceAndName}
                  defaultValue="Vespa Matic"
                />
                <TextInput
                  style={styles.priceAndName}
                  keyboardType="number-pad"
                  value={price.toString()}
                  onChangeText={text => priceHandler(text)}
                />
              </View>
            ) : (
              <View>
                <Text style={styles.priceAndName}>Vespa Matic</Text>
                <Text style={styles.priceAndName}>Rp.120.000/day</Text>
              </View>
            )}
            <View style={styles.ratingBg}>
              {/* ITEM RATING */}
              <Text style={styles.ratingText}>4.5</Text>
              <Image source={require('../../../images/star.png')} />
            </View>
          </View>

          <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
            <Text style={styles.itemFeature}>Max for 2 person</Text>
            <Text style={styles.itemFeature}>No prepayment</Text>
            <Text style={styles.itemStatus}>Available</Text>
          </View>

          {/* LOCATION */}
          <View style={styles.itemPlaces}>
            <Image source={require('../../../images/location.png')} />
            <Text style={styles.placesText}>
              Jalan Maliboboro, No. 21, Yogyakarta
            </Text>
          </View>
          {/* DISTANCE */}
          <View style={styles.itemLocation}>
            <Image source={require('../../../images/distance.png')} />
            <Text style={styles.placesText}>3.2 miles from your location</Text>
          </View>

          {/* STOCK */}
          {isEditItem ? (
            <View style={styles.stockContainer}>
              <Text style={styles.stockText}>Update Stock</Text>
              <View style={styles.incDecContainer}>
                <TouchableOpacity
                  onPress={minusHandler}
                  style={styles.incDecButton}>
                  <Image source={require('../../../images/-.png')} />
                </TouchableOpacity>
                {/* ITEM STOCK */}
                <Text style={styles.stockText}>{stock}</Text>
                <TouchableOpacity
                  onPress={plusButton}
                  style={styles.incDecButton}>
                  <Image source={require('../../../images/+.png')} />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.stockContainer}>
              <Text style={styles.stockText}>Stock</Text>
              {/* ITEM STOCK */}
              <Text style={styles.stockText}>{stock}</Text>
            </View>
          )}

          {/* AVAILABLE & BOOKED BUTTON */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={
                isActive == 1 ? styles.activeButton : styles.inactiveButton
              }
              onPress={() => setIsActive(1)}>
              <Text
                style={isActive == 1 ? styles.activeText : styles.inactiveText}>
                Available
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                isActive == 2 ? styles.activeButton : styles.inactiveButton
              }
              onPress={() => setIsActive(2)}>
              <Text
                style={isActive == 2 ? styles.activeText : styles.inactiveText}>
                Full Booked
              </Text>
            </TouchableOpacity>
          </View>

          {/* EDIT SUBMIT BUTTON */}
          {isEditItem && (
            <View style={{paddingHorizontal: 15}}>
              <TouchableOpacity
                onPress={submitChanges}
                style={styles.updateButton}>
                <Text style={styles.updateText}>Update changes</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default EditItem;
