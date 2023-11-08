import { StyleSheet, TextInput, TouchableHighlight, Image, ImageBackground } from 'react-native';

import { Text, View } from './Themed';
import { colors } from '../constants/Colors';
//import { TextInput } from 'react-native-gesture-handler';
type attributeType = {
  description: string, value: number, modifier: number
};
export default function AttributeContainer(props: 
  attributeType) {
  return (
    <View>

        <View style={[styles.column, styles.container, styles.beige]}>
            <Text style={[styles.info, {marginBottom:4}]}>{props.description}</Text>
            <Text style={[styles.info, {marginBottom:4, fontSize:20}]}>{props.value}</Text>
            <Text style={[styles.info, {marginBottom:4}]}>+{props.modifier}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',   
        borderColor: colors.darkBrown,
        borderWidth: 1,
        borderStyle: 'solid',  
        padding: 8,
    },

    row:{
        display: 'flex',
        flexDirection: 'row',
      },
      column:{
        display: 'flex',
        flexDirection: 'column',
      },
      info:{
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.darkBrown,      
        opacity: 0.8,
    }, 
    beige:{
        backgroundColor: colors.beigeColor,
      },
});
