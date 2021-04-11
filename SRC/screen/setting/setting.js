import React, { useState } from 'react';
import { View, Text ,StyleSheet,FlatList,Button,TouchableOpacity, TextInput} from 'react-native'
import style from './style'
import { useSelector, useDispatch } from 'react-redux'
import {ADD_ITEM} from '../../redux/Item'

function Setting({navigation}) {
  const Items = useSelector(state => state)
  const [value, setvalue] = useState('');
  const dispatch = useDispatch()
  const addItem = item => dispatch({ type: ADD_ITEM, payload: item })
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={()=>{navigation.goback()}}>Setting Screen</Text>
        <TextInput
        placeholder={'ashish'}
        value={value}
        onChangeText={(text)=>{setvalue(text)}}
        >
        </TextInput>
        {Items.map((item,index)=>{
          return(
           <View>
              <Text>{item}</Text>
           </View>
          )
        })}
        <Text>{value}</Text>
        <Button title="Submit Data" onPress={() => addItem(value)} />
        {/* <Button title="Submit Data" onPress={() => navigation.navigate('Profile')} /> */}
      </View>
    );
  }

  export default Setting