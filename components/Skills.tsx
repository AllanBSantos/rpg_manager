import { View, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../constants/Colors';
import { Text } from './Themed';

export function Skills() {

    const skills = [
        { name: 'Acrobacia', modifier: 0, attr: 'Des', passive: 10 },
        { name: 'Arcanismo', modifier: 0, attr: 'Int', passive: 10 },
        { name: 'Atletismo', modifier: 0, attr: 'For', passive: 10 },
        { name: 'Atuação', modifier: 0, attr: 'Car', passive: 10 },
        { name: 'Enganação', modifier: 0, attr: 'Car', passive: 10 },
        { name: 'Furtividade', modifier: 0, attr: 'Des', passive: 10 },
        { name: 'Historia', modifier: 0, attr: 'Int', passive: 10 },
        { name: 'Intimidação', modifier: 0, attr: 'Car', passive: 10 },
        { name: 'Intuição', modifier: 0, attr: 'Sab', passive: 10 },
        { name: 'Investigação', modifier: 0, attr: 'Int', passive: 10 },
        { name: 'Animais', modifier: 0, attr: 'Sab', passive: 10 },
        { name: 'Medicina', modifier: 0, attr: 'Sab', passive: 10 },
        { name: 'Natureza', modifier: 0, attr: 'Int', passive: 10 },
        { name: 'Percepção', modifier: 0, attr: 'Sab', passive: 10 },
        { name: 'Persuasão', modifier: 0, attr: 'Car', passive: 10 },
        { name: 'Pestiditação', modifier: 0, attr: 'Des', passive: 10 },
        { name: 'Religião', modifier: 0, attr: 'Int', passive: 10 },
        { name: 'Sobrevivência', modifier: 0, attr: 'Sab', passive: 10 },
    ];


  return (
    <ScrollView style={styles.container}>
        { skills.map((skill) => (
        <View style={styles.row}>
            <View style={[styles.column, {flex:1}]}>
                <Text style={styles.text}> {skill.name} </Text>
            </View>  
            <View style={[styles.column, { flex:1}]}>
                <Text style={styles.text}> {skill.attr} </Text>
            </View>  
            <View style={[styles.column]}>
                <Text style={styles.text}> +  {skill.modifier} </Text>
            </View>  
            <View style={[styles.column]}>
                <Text style={styles.text}> Passiva:{skill.passive} </Text>
            </View>  
        </View>
        ))  }
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.lightBeige,
    },
    row:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 5,
  },
  column:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  beige:{
    backgroundColor: colors.beigeColor,
  },
    text:{
        color: colors.darkBrown,
        fontSize: 18,
    },
  });
