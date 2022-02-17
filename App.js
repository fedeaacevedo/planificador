
import React, { useState } from 'react';
import {
  ScrollView, Modal, StyleSheet, Text, View, Alert, Pressable, Image
} from 'react-native';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';


const App = () => {

  const [isValidPresupuesto, setIsValidPresuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)


  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresuesto(true)
    } else {
      Alert.alert('ERROR', 'El presupuesto no puede ser 0')
    }
  }

  return (
    <ScrollView>
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

        {modal && (
          <Modal
            animationType='slide'
            visible={modal}
          >
            <FormularioGasto />
          </Modal>
        )}

        {isValidPresupuesto && (

          <Pressable
            onPress={() => setModal(!modal)}
          >
            <Image
              style={styles.imagen}
              source={require('./src/img/nuevo-gasto.png')}
            />
          </Pressable>

        )}


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  header: {
    backgroundColor: '#3B82F6',
    minHeight: 400
  },
  pressable: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30
  },
  imagen: {
    width: 60,
    height: 60,
    left: 220,
    margin: 60

  }

});

export default App;
