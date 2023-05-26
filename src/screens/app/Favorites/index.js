import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteItem from '../../../components/Favoriteitem';
import Header from '../../../components/Header';

const Favorites = () => {
  const renderItem = ({item}) => {
    return <FavoriteItem {...item} />;
  };
  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <FlatList
        style={styles.list}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
