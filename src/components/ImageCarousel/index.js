import React, {useState} from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles';

const {width} = Dimensions.get('window');
const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderImage = ({item}) => {
    return <Image style={styles.image} source={{uri: item}} />;
  };

  const handleScrollEnd = (e) => {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset / width);
    console.log(index);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
      />
      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(ImageCarousel);
