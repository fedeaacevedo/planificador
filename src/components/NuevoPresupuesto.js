import React from 'react'
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native'

const NuevoPresupuesto = () => {
  return (
    
    <View style={styles.contenedor}>
        <Text>
            Definir Presupuesto
        </Text>

        <TextInput
        
        />

        <Pressable>
            <Text>Agregar Presupuesto</Text>
        </Pressable>

    </View>
    
  )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#FFF',
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 10,
        paddingVertical: 40, 
        paddingHorizontal:20
        },

})

export default NuevoPresupuesto