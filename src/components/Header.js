import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'

const Header = () => {
    return (

        <SafeAreaView style={styles.header}>
            <Text style={styles.texto}>Planificador de gastos</Text>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3b82f6'
    },
    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingVertical: 20,
    }
})

export default Header