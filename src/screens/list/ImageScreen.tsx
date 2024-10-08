import { Dimensions, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import { dataCachelistData } from './data';

const size = Dimensions.get('window').width / 3 - 2;
const ImageScreen = () => {
  const renderItem = ({
    item,
  }: {
    item: { uri: string; blurhash: string };
  }) => {
    return <Image src={item.uri} style={styles.card} />;
  };
  return (
    <FlatList
      keyExtractor={(item) => item.uri}
      data={dataCachelistData}
      numColumns={3}
      getItemLayout={(_, index) => ({
        length: size,
        offset: size * index,
        index,
      })}
      renderItem={renderItem}
    />
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  card: {
    width: size,
    height: size,
    margin: 1,
  },
});
