import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

const HorizontalImageStack = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item }}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
  
  return (
    <FlatList
      data={images}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 8,
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default HorizontalImageStack;
