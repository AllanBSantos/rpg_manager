import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../constants/Colors';
import { Text } from './Themed';

export function Inventory() {
  return (
    <View style={styles.container}>
           <Text>Inventory</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       
    },
  });
