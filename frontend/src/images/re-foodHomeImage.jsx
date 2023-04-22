import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  refoodHomeImage: {
    width: 1092,
    height: 841,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.refoodHomeImage}>
      <Image
        style={styles.refoodHomeImage}
        source={{
          uri: 'https://www.westerncity.com/sites/main/files/imagecache/lightbox/main-images/5d_organic_waste.jpg',
        }}
      />
    </View>
  );
};

export default DisplayAnImage;