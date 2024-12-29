import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, TextInput, Image, ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function App() {
  const [likedItems, setLikedItems] = useState([false, false, false, false, false]);
  const [cartCount, setCartCount] = useState(0);

  const toggleLike = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);

    if (!newLikedItems[index]) {
      setCartCount(cartCount - 1);
    } else {
      setCartCount(cartCount + 1);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6200EE" />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TextInput style={styles.input} placeholder='Nima qidiryapsiz ?' placeholderTextColor='#fff' />
          <View style={styles.cartContainer}>
            <Ionicons name="cart" size={32} color="white" style={styles.icon} />
            {cartCount > 0 && (
              <View style={styles.cartCount}>
                <Text style={styles.cartText}>{cartCount}</Text>
              </View>
            )}
          </View>
        </View>

        <ScrollView style={styles.body}>
          <View style={styles.box_flex}>
            {['Iphone 16 Pro Max', 'Iphone 16 Pro Max', 'Iphone 16 Pro Max', 'Iphone 16 Pro Max', 'Iphone 16 Pro Max','Iphone 16 Pro Max'].map((item, index) => (
              <View style={styles.box} key={index}>
                <Image style={styles.Image} source={require('../React-native/assets/Iphone 16 pro max.png')} resizeMode='contain' />
                <Text style={styles.text}>{item}</Text>
                <View style={styles.flex}>
                  <Text style={styles.text}>21 110 000 so'm</Text>
                  <AntDesign
                    name={likedItems[index] ? "heart" : "hearto"}
                    size={20}
                    color={likedItems[index] ? "red" : "white"}
                    style={styles.heart_icon}
                    onPress={() => toggleLike(index)}
                  />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242124',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: '#242124',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 5,
    color: '#fff',
    paddingLeft: 10,
  },
  icon: {
    paddingLeft: 10,
  },
  cartContainer: {
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontSize: 12,
  },
  Image: {
    width: '100%',
    height: 200,
  },
  box: {
    backgroundColor: '#000',
    width: '49%',
    borderRadius: 10,
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 10,
  },
  text: {
    color: '#fff',
    paddingLeft: 15,
    paddingBottom: 10,
  },
  flex: {
    flexDirection: 'row',
    textAlign: "center",
    paddingBottom: 15,
  },
  heart_icon: {
    paddingLeft: 10,
  },
  box_flex: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});