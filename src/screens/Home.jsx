import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Data =[
  {id: 1, namaIcon: 'human-baby-changing-table', judulIcon:'Ambil ditempat'},
  {id: 2, namaIcon: 'truck-cargo-container', judulIcon:'Pesan antar'},
  {id: 3, namaIcon: 'tag-multiple', judulIcon:'Promo'},
  {id: 4, namaIcon: 'view-list', judulIcon:'Lainnya'},
];

const Home = () => {
  return (
    <View style={{padding:20}}>
      <FlatList
      data={Data}
      horizontal={true}
      renderItem={({item}) => (
      <TouchableOpacity style={{width:50, marginRight:35}}>
        <View style={{width:50, height:50, backgroundColor:'grey', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
          <MaterialCommunityIcons name={item.namaIcon} color='white' size={30} />
        </View>
        <Text style={{color:'black', textAlign:'center'}}>{item.judulIcon}</Text>
      </TouchableOpacity>

  )} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})