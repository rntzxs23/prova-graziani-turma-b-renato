import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddMealScreen({ route, navigation }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');

  const addMeal = route.params.addMeal;

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome da refeição:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        value={name}
        onChangeText={setName}
      />

      <Text>Calorias:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 20 }}
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />

      <Button
        title="Salvar"
        onPress={() => {
          addMeal({ name, calories });
          navigation.goBack();
        }}
      />
    </View>
  );
}
