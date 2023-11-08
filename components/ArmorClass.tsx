import { StyleSheet, TextInput, TouchableHighlight, Image, ImageBackground } from 'react-native';

import { Text, View } from './Themed';
import { colors } from '../constants/Colors';
//import { TextInput } from 'react-native-gesture-handler';

export default function ArmorClass(props: {ac: number}) {
  return (
    <ImageBackground source={require('../assets/images/escudo.png')} resizeMode="cover" style={styles.container}>
        <Text style={[styles.info, styles.ac]}>{props.ac}</Text>    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
       height: 80,
       width: 80,
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
    },
    info:{
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.darkBrown,
        opacity: 0.8,
    },  
    ac:{

    },
    logo: {
        width: 100,
        height: 100,
      },
});
