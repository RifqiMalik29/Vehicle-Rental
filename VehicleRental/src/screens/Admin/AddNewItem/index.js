import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from 'react-native-image-picker';

import Navigation from '../../../components/Navigation';
import AddItemInputCenter from '../../../components/AddItemInputCenter';
import AddItemInput from '../../../components/AddItemInput';

import {addVehicle} from '../../../redux/actions/admin/vehicle';

const AddNewItem = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Malang');
  const [category, setCategory] = useState('Human');
  const [stock, setStock] = useState(0);
  // const form = {
  //   photo: photo,
  //   name: name,
  //   price: price,
  //   description: description,
  //   location: location,
  //   category: category,
  //   stock: stock,
  // };
  const [stockInput, setStockInput] = useState(false);
  const [imageData, setImageData] = useState(null);
  const bs = useRef();
  const fall = new Animated.Value(1);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);

  const minusButton = () => setStock(stock - 1);

  const minusHandler = () => {
    if (stock > 0) {
      minusButton();
    } else {
      ToastAndroid.show('Invalid stock', ToastAndroid.SHORT);
    }
  };

  const inputMany = () => {
    setStock(`${stock}`);
    setStockInput(true);
  };

  const cancelAddItemhandler = () => {
    if (form) {
      Alert.alert('Hello', 'Are you sure you want to leave this page?');
    } else {
      navigation.goBack();
    }
  };

  const choosePhotoFromGallery = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        setImageData(response);
        setPhoto(response.uri);
      },
    );
  };

  const takeFromCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
      },
      response => {
        setPhoto(response.uri);
      },
    );
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append('photo', {
      uri: imageData.uri,
      name: imageData.fileName,
      type: imageData.type,
    });
    formData.append('category', category);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock);
    dispatch(addVehicle(formData, token));
  };

  const renderContent = () => (
    <View style={styles.bottomSheetContainer}>
      <View>
        <Text style={styles.stockTitle}>Upload Image</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={choosePhotoFromGallery}
          style={styles.bottomSheetButton}>
          <Text style={styles.addPicturesText}>Choose from Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takeFromCamera}
          style={styles.bottomSheetButton}>
          <Text style={styles.addPicturesText}>Take from Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => bs.current.snapTo(1)}
          style={styles.bottomSheetButton}>
          <Text style={styles.addPicturesText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.topNavigationContainer}>
        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../../images/left-arrow.png')} />
          <Text style={styles.addItemText}>Add new item</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cancelAddItemhandler}>
          <Text style={styles.cancelText}>Close</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.addItemContainer}>
          <View>
            {photo ? (
              <Avatar.Image size={150} source={{uri: photo}} />
            ) : (
              <View style={styles.photoBg}>
                <Image source={require('../../../images/camera.png')} />
              </View>
            )}
          </View>
          {/* {imageSize > 5024 && photo ? (
            <View>
              <Text>Image size is too large</Text>
              <Text>Image must be smaller than 5 mb</Text>
            </View>
          ) : (
            <Text>OK!</Text>
          )} */}
          <TouchableOpacity
            onPress={() => bs.current.snapTo(0)}
            style={styles.addPicturesBg}>
            <Text style={styles.addPicturesText}>Add pictures</Text>
          </TouchableOpacity>
          <AddItemInputCenter
            placeholder="Type product name min. 30 characters"
            value={name}
            changeText={text => setName(text)}
          />
          <AddItemInputCenter
            placeholder="Type product price"
            value={price}
            changeText={text => setPrice(text)}
          />
          <AddItemInput
            placeholder="Describe your product min. 150 characters"
            value={description}
            changeText={text => setDescription(text)}
            title="Description"
            type="text"
          />
          <AddItemInput
            placeholder="Select location"
            value={location}
            changeText={text => setLocation(text)}
            title="Location"
            type="option"
          />
          <AddItemInput
            placeholder="Select category"
            value={category}
            changeText={text => setCategory(text)}
            title="Add to"
            type="option"
          />
          <View
            style={{
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.stockTitle}>Stock :</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={stock == 0 ? styles.minusBg : styles.plusBg}
                onPress={minusHandler}>
                <Image source={require('../../../images/-.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={inputMany}>
                {stockInput ? (
                  <TextInput
                    defaultValue={stock}
                    style={styles.stockText}
                    keyboardType="number-pad"
                  />
                ) : (
                  <Text style={styles.stockText}>{stock}</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.plusBg}
                onPress={() => setStock(stock + 1)}>
                <Image source={require('../../../images/+.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={submitForm}
            style={styles.saveProductButton}>
            <Text style={styles.stockTitle}>Save product</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
      <Navigation active={1} />
      <BottomSheet
        renderContent={renderContent}
        renderHeader={renderHeader}
        ref={bs}
        snapPoints={[360, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction
        enabledContentGestureInteraction={false}
        enabledContentTapInteraction
      />
    </SafeAreaView>
  );
};

export default AddNewItem;

const styles = StyleSheet.create({
  topNavigationContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  addItemText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginLeft: 30,
  },
  cancelText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#B8BECD',
  },
  addItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 20,
  },
  photoBg: {
    backgroundColor: 'rgba(186, 186, 186, 0.35)',
    borderRadius: 100,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPicturesBg: {
    backgroundColor: '#393939',
    borderRadius: 10,
    width: '40%',
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
  },
  addPicturesText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#FFCD61',
    padding: 17,
  },
  minusBg: {
    backgroundColor: 'rgba(255, 205, 97, 0.54)',
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBg: {
    backgroundColor: '#FFCD61',
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#393939',
    marginHorizontal: 20,
  },
  stockTitle: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#393939',
  },
  saveProductButton: {
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    marginTop: 30,
  },
  bottomSheetContainer: {
    backgroundColor: '#FFF',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomSheetButton: {
    backgroundColor: '#393939',
    borderRadius: 10,
    width: '100%',
    marginVertical: 7,
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
});
