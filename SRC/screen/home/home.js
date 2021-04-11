import React from 'react'
import { View, Text ,StyleSheet,FlatList,Image,Button, TouchableOpacity} from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useSelector, useDispatch } from 'react-redux'

function Home({navigation}) {
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width:'98%',margin:10}}>
          <View>
          <Image source={require('../../images/menu.png')}/>
          </View>
        </TouchableOpacity>
        <Text>Home Screen</Text>
         
      
      <TouchableOpacity  style={{marginTop:5,marginBottom:5}} onPress={() => navigation.navigate('Profile')} >
        <View>
          <Text>Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  style={{marginTop:5,marginBottom:5}} onPress={() => navigation.navigate('Setting')} >
        <View>
          <Text>Setting</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }

  export default Home