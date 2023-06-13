import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const About=({dataCoin, route, setDataCoin, navigation})=>{
  return(
    <>
    <View style={styles.container}>
    <View style={styles.positionAbout}>
      <Text>
        <Icon name="comments" size={100} color="#FFF" />
      </Text>
      <Text
      style={styles.textDetail}
      onPress={() => Linking.openURL('mailto:roseab.developer@gmail.com')}
      >
        Podras contactarme por cualquier tipo de duda o consulta
        al email:
        <Text style={styles.linkEmail}>
          roseab.developer@gmail.com
        </Text>
      </Text>
    </View>
    </View>
    </>
  )
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center'
  },
  textDetail:{
    color:'white',
    fontSize:20
  },
  textIcon:{},
  linkEmail:{
    color:'#2c62ff'
  },
  positionAbout:{
    alignItems:'center',
    paddingTop:'50%'
  },
});
export default About;
