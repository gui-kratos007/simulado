import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CardItem from './CardItem';

const App = () => {
  const itens = [
    {
      nome: 'Espada Mágica',
      descricao: 'Espada lendaria deixada por um antigo rei da britania. Aumenta o poder de ataque em 20.',
      imagem: 'https://drogukgames.files.wordpress.com/2014/03/pzo3031_sword.jpg',
    },
    {
      nome: 'Escudo de Aço',
      descricao: 'Escudo muito resistente de um renomado guerreiro antigo. Aumenta a defesa em 15.',
      imagem: 'https://i.pinimg.com/474x/a3/85/fb/a385fbabfda8dd37ca43ece01eb43e18.jpg',
    },
    {
      nome: 'Poção de Cura',
      descricao: 'Poção extremamente importante para se recuperar no campo de batalha Recupera 50 pontos de vida.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWCzyG03ZWvFgrPIuNlPVWMDoIgq22f9v3g&usqp=CAU',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {itens.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;
