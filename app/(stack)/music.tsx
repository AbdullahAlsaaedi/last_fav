import { View, Text } from 'react-native';
import style from './music.styles';

export default function Music() {
  return (
    <View style={style.root}>
      <Text>Music Screen</Text>
    </View>
  );
}


// connect with spotify apis 
// fetch data ..
// group the data into 3 objects, historytracks, mostplayedtracks, genres
// render data  