import React, { useState } from 'react'
import {Text, SafeAreaView, View, TextInput, StyleSheet, Pressable, ScrollView} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import globalStyles from '../styles'


const FormularioGasto = ({setModal, handleGasto}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')


  return (
    <ScrollView>
    <SafeAreaView style={styles.contenedor}>
       <View>
           <Pressable 
                    style={styles.btnCancelar}
                    onLongPress={() => setModal(false)}
            >
               <Text style={styles.btnCancelarTexto}>Cancelar</Text>
           </Pressable>
       </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
              style={styles.input}
              placeholder='Nombre del gasto. ej. Comida '
              value={nombre}
              onChangeText={setNombre}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
          style={styles.input}
              placeholder='Cantidad del gasto. ej. $300 '
              keyboardType='numeric'
              value={cantidad}
              onChangeText={setCantidad}              
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Categoria Gasto</Text>
          <Picker 
            selectedValue={categoria}
            onValueChange={(value) => {
              setCategoria(value)
            }}
          >
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Gastos Varios" value="gastos" />
          </Picker>
        </View>

        <Pressable 
        style={styles.submitBtn}
          onPress={() => handleGasto({nombre, cantidad, categoria})} 
        >
          <Text style={styles.submitBtnTexto}>Agregar Gasto</Text>
        </Pressable>

      </View>

    </SafeAreaView>
    </ScrollView>
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
    marginBottom: 20,
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
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  }, 
  submitBtn:{
    backgroundColor:'#3b82f6',
    padding: 10,
    marginTop:20,
    marginBottom: 100,
    borderRadius:10
  },
  submitBtnTexto:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    textTransform:'uppercase'
  },
  btnCancelar:{
    backgroundColor:'#FC3C13',
    padding: 10,
    marginTop:20,
    marginHorizontal: 30,
    borderRadius:10
  },
  btnCancelarTexto:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    textTransform:'uppercase',
  }
})

export default FormularioGasto