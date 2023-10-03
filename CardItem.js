import React from 'react';
import { Card, Button, Image, Text } from 'react-native-elements';

const CardItem = ({ item }) => {
  return (
    <Card>
      <Image source={{ uri: item.imagem }} style={{ width: 200, height: 200 }} />
      <Text h4>{item.nome}</Text>
      <Text>{item.descricao}</Text>
      <Button title="Propor Troca" />
    </Card>
  );
};

export default CardItem;
