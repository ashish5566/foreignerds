import React, { useState } from 'react';
import { View, Text ,Image,Button,TouchableOpacity, TextInput} from 'react-native'
import style from './style'
import { useSelector, useDispatch } from 'react-redux'
import {ADD_ITEM} from '../../redux/Item'

function Setting({navigation}) {
  const Items = useSelector(state => state)
  const [value, setvalue] = useState('');
  const dispatch = useDispatch()
  const addItem = item => dispatch({ type: ADD_ITEM, payload: item })
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
         <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width:'98%',margin:10}}>
          <View>
          <Image source={require('../../images/menu.png')}/>
          </View>
        </TouchableOpacity>
        <Text onPress={()=>{navigation.goback()}}>Setting Screen</Text>

        <Text>Item List</Text>

        {Items.map((item,index)=>{
          return(
           <View>
              <Text>{item}</Text>
           </View>
          )
        })}
         
                                    <View style={[style.Input_Containers, style.textboxborder]}>
                                        <TextInput
                                          placeholder={'Please enter item'}
                                          value={value}
                                          onChangeText={(text)=>{setvalue(text)}}
                                          style={[style.Input_TextStyles]}
                                        />
                                        
                                    </View>
      
        {/* <Text>{value}</Text> */}
        <Button title="Submit Data" onPress={() =>value.trim()==''?alert('Please enter item') :addItem(value)} />
      </View>
    );
  }

  export default Setting