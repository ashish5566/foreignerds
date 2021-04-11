import React from 'react'
import { View, Text ,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native'
import style from './style'
// import { useSelector, useDispatch } from 'react-redux'

function Profile({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={()=>{navigation.goBack()}}>Profile Screen</Text>
      </View>
    );
  }

  export default Profile