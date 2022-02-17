
import React, {useState} from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet, Text, View, Alert, Pressable, Image } from 'react-native';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';


const App = () => {

  const [isValidPresupuesto, setIsValidPresuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  
  const handleNuevoPresupuesto = (presupuesto) =>{
     if(Number(presupuesto) > 0) {
       setIsValidPresuesto(true)
     } else {
       Alert.alert('ERROR', 'El presupuesto no puede ser 0')
     }
  }

  return (
    
    <View style={styles.contenedor}>

      <View style={styles.header}>
        <Header />

        {isValidPresupuesto ? (
           <ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
           /> 
           ) : (
          <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handleNuevoPresupuesto={handleNuevoPresupuesto}
          />
        )}
        
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#f5f5f5',
    flex: 1      
    },
    header: {
      backgroundColor: '#3b82f6'
  },
});

export default App;
