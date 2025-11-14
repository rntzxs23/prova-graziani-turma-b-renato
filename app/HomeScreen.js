import { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);

  const totalCalories = meals.reduce((sum, item) => sum + Number(item.calories), 0);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Adicionar refeição"
        onPress={() =>
          navigation.navigate('Adicionar Refeição', { addMeal: meal => setMeals([...meals, meal]) })
        }
      />

      <Text style={{ marginTop: 20, fontSize: 18 }}>Total de calorias: {totalCalories}</Text>

      <FlatList
        data={meals}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            {item.name} - {item.calories} kcal
          </Text>
        )}
      />
    </View>
  );
}