import { View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../constants/Colors';
import { Text } from './Themed';

type ButtonProps = {
    text: string;
    onPress: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkBrown,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
    },
  });
