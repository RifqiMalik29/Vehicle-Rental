import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Navigation from '../../../components/Navigation';

const AdminHome = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require('../../../images/adminHome-bg.png')} />
        </View>
        <SafeAreaView>
          <View style={styles.searchContainer}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={styles.locationInputBg}>
                <TextInput
                  placeholder="Select location"
                  value={search}
                  onChangeText={text => setSearch(text)}
                  placeholderTextColor="#999999"
                  style={styles.locationInput}
                />
              </View>
              <View style={styles.carBg}>
                <Text style={styles.carText}>Car</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.searchButtonBg}>
              <Text style={styles.searchText}>Search Vehicle</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.recommendedTextContainer}>
              <Text style={styles.recommendedText}>Recommended</Text>
              <TouchableOpacity>
                <Text style={styles.viewMoreText}>View more</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AdminAddItem')}
              style={styles.addItemButton}>
              <Text style={styles.addItemText}>Add new item</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View>
        <Navigation active={1} />
      </View>
    </SafeAreaView>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  locationInputBg: {
    borderColor: '#DFDEDE',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#fcfcfc',
    flex: 2,
    paddingLeft: 5,
    paddingVertical: 4,
  },
  locationInput: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },
  carBg: {
    borderColor: '#DFDEDE',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#fcfcfc',
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  carText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#999999',
  },
  searchButtonBg: {
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    width: '100%',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#393939',
    padding: 17,
    fontFamily: 'Nunito-Regular',
  },
  recommendedTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendedText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#393939',
  },
  viewMoreText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#393939',
    textDecorationLine: 'underline',
    textDecorationColor: '#393939',
  },
  addItemButton: {
    backgroundColor: '#393939',
    borderRadius: 10,
    width: '100%',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addItemText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFCD61',
    padding: 17,
    fontFamily: 'Nunito-Regular',
  },
});
