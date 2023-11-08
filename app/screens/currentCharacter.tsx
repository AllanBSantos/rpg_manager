import { useState } from 'react';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import ArmorClass from '../../components/ArmorClass';
import AttributeContainer from '../../components/AttributeContainer';
import { Skills } from '../../components/Skills';
import { Spells } from '../../components/Spells';
import { Features } from '../../components/Features';
import { Inventory } from '../../components/Inventory';
import { colors } from '../../constants/Colors';

 type attributeType = {
  description: string, value: number, modifier: number
};

type characterDataType = {
  name: string,
  url: string,
  currentHp: number,
  totalHp: number,
  ac: number,
  lvl: number,
  race: string,
  class: string,
  background: string,
  proficiencyBonus: number,
  initiative: number,
  attributes: attributeType[],
}

export default function CurrentCharacter() {
    const [menuSelected, setMenuSelected] = useState(0);

    const characterData : characterDataType = {
      name: 'Sarah Lovegood',
      url: "https://i.pinimg.com/736x/87/b4/0f/87b40f9cb69e3b794eb84caccb6b36d7.jpg",
      currentHp: 10,
      totalHp: 10,
      ac: 20,
      lvl: 1,
      race: 'Humano',
      class: 'Druida',
      background: 'Forasteiro',
      proficiencyBonus: 2,
      initiative: 3,
      attributes: [
        {description: 'str', value: 14, modifier: 2},
        {description: 'dex', value: 14, modifier: 2},
        {description: 'con', value: 14, modifier: 2},
        {description: 'int', value: 14, modifier: 2},
        {description: 'wis', value: 14, modifier: 2},
        {description: 'cha',value: 14, modifier: 2},
      ],
    };


  return (
    <View style={styles.container}>
        <View  style={styles.header}>
            <View style={[ styles.column, styles.beige, {alignItems:'center'}]}>
            <TouchableHighlight
              style={[styles.profileImgContainer, { borderColor: 'black', borderWidth:1 }]}
            >
                <Image
                    style={styles.logo}
                    source={{
                        uri: characterData.url,
                    }}
                />
            </TouchableHighlight>
            <Text style={[styles.name, {fontSize:24}]}>{`${characterData.currentHp}`}/{`${characterData.totalHp}`}</Text>
            </View>
            <View style={styles.nameContainer}>
                <View style={[ styles.row ,styles.beige]}>
                    <Text style={styles.name}>{characterData.name}</Text>
                    <Text style={styles.name}>Lvl {`${characterData.lvl}`} </Text>
                </View>
                <View style={[ styles.row ,styles.beige]}>
                    <Text style={styles.info}>{characterData.race}</Text>
                    <Text style={styles.info}>.</Text>
                    <Text style={styles.info}>{characterData.class} </Text>
                    <Text style={styles.info}>.</Text>
                    <Text style={styles.info}>{characterData.background} </Text>
                </View>
                <View style={ [styles.beige, styles.row, { width:'100%', justifyContent:'space-around' }]}>

                    <View style={
                        [styles.column, styles.beige, { width:'30%'}, {justifyContent:'center', alignItems:'center'}]}>
                        <Text style={styles.info}>Iniciativa </Text>
                        <Text style={styles.info}> +{`${characterData.initiative}`} </Text>
                    </View>
                    <View style={
                        [styles.column, styles.beige, { width:'30%'}, {justifyContent:'center', alignItems:'center'}]}>
                        <Text style={styles.info}>Proef. </Text>
                        <Text style={styles.info}> +{`${characterData.proficiencyBonus}`} </Text>
                    </View>
                    <ArmorClass ac={characterData.ac} />
                </View>
            </View>
        </View>
        <View style={[styles.attributeContainer]}>

                      {characterData.attributes.map((attribute) => (
                       <AttributeContainer description={attribute.description} value={attribute.value} modifier={attribute.modifier} />
                      ))}
        </View>
        <View style={[styles.row, styles.beige, {justifyContent: 'space-around'}]}>
            <Text 
                style={[styles.info, menuSelected === 0 ? styles.menuSelected : styles.beige  ]}
                onPress={() => setMenuSelected(0)}
                >
                Pericias
            </Text>
            <Text 
                style={[styles.info, menuSelected === 1 ? styles.menuSelected : styles.beige  ]}
                onPress={() => setMenuSelected(1)}
                >
                Inventario
            </Text>
            <Text 
                style={[styles.info, menuSelected === 2 ? styles.menuSelected : styles.beige  ]}
                onPress={() => setMenuSelected(2)}
                >
                Magias
            </Text>
            <Text 
                style={[styles.info, menuSelected === 3 ? styles.menuSelected : styles.beige  ]}
                onPress={() => setMenuSelected(3)}
                >
                Features
            </Text>
        </View>
        <View style={[styles.row, styles.beige, styles.menuContainer]}>
            {menuSelected === 0 && <Skills />}
            {menuSelected === 1 && <Inventory />}
            {menuSelected === 2 && <Spells />}
            {menuSelected === 3 && <Features />}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.darkBrown,
    borderWidth: 1,
    borderStyle: 'solid',  
    backgroundColor: colors.beigeColor, 
    flex: 1,
    width: '95%',
    margin: 8,
    borderRadius: 20,
  },
  menuContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center', 
    backgroundColor: colors.lightBeige, 
    borderRadius: 4,
    margin: 8,
    padding: 8,
    borderColor: colors.darkBrown,
    borderWidth: 1,
    borderStyle: 'solid',  
  },
  menuSelected:{
    backgroundColor: colors.lightBeige,
    borderColor: colors.darkBrown,
    borderWidth: 1,
    borderStyle: 'solid',  
    padding: 4,
  },
  attributeContainer:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.beigeColor, 
    borderRadius: 4,
    margin: 8,
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
  beige:{
    backgroundColor: colors.beigeColor,
  },
  menu:{
    fontSize: 26,
  },
  header:{
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.beigeColor, 
  },
    profileImgContainer: {
        marginLeft: 8,
        height: 100,
        width: 100,
        borderRadius: 100,
        overflow: 'hidden',
        marginTop: 4,

    },
    logo: {
        width: 100,
        height: 100,
      },

    nameContainer:{
        display:'flex',
        alignItems:'center',
        flex:1,
        backgroundColor: colors.beigeColor, 
        marginTop: 8

    },

    name:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkBrown,
        marginLeft: 8,
        marginTop: 8,
    },  
    info:{
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.darkBrown,
        marginLeft: 8,
        marginTop: 8,
        opacity: 0.8,
    },  
});
