import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';  

export default function GenerarQR({ route, navigation }) {
  const { cantidad } = route.params;  //Se extrae la cantidad puesta en la pantalla anterior

  //verifica si la cantidad es valida
  if (isNaN(cantidad) || cantidad <= 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.errorText}>Cantidad no válida.</Text>
      </View>
    );
  }

  //Si es valido devuelve el QR
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escané el siguiente código:</Text>
      <Text style={styles.balance}>Cantidad a transferir: ${cantidad.toFixed(2)}</Text>
      <QRCode
        value={cantidad.toString()}  
        size={200}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balance: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
});

