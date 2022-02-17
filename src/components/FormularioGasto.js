import React from 'react'
import {Text, SafeAreaView, View, TextInput, StyleSheet, Pressable} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import globalStyles from '../styles'


const FormularioGasto = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
       <View>
           <Pressable>
               <Text>Cancelar</Text>
           </Pressable>
       </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
              style={styles.input}
              placeholder='Nombre del gasto. ej. Comida '
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
          style={styles.input}
              placeholder='Cantidad del gasto. ej. $300 '
              keyboardType='numeric'
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Categoria Gasto</Text>
          <Picker style={styles.input}>
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Gastos Varios" value="gastos" />
          </Picker>
        </View>

        <Pressable>
          <Text>Agregar Gasto</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#1e40af',
    flex: 1
  },
  formulario:{
    ...globalStyles.contenedor
  },
  titulo:{
    textAlign:'center',
    fontSize: 28,
    marginVertical: 30,
    color:'#64748b'
  },
  campo:{
    marginVertical: 10
  },
  label:{
    color:'#64748b',
    textTransform:'uppercase',
    fontSize: 16,
    fontWeight:'bold'
  },
  input:{
    backgroundColor:'#f5f5f5',
    padding: 10
  }
})

export default FormularioGasto