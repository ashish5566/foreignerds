import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import style from './style'

function Profile({navigation}) {
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
         <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width:'98%',margin:10}}>
          <View>
          <Image source={require('../../images/menu.png')}/>
          </View>
        </TouchableOpacity>
        <Text onPress={()=>{navigation.goBack()}}>Profile Screen</Text>
      </View>
    );
  }

  export default Profile