import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Diário',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color="black" />,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre ',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color="black" />,
        }}
      />
      <Tabs.Screen
        name="receitas"
        options={{
          title: 'Receitas',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chef-hat" size={24} color="black" />,
        }}
      />
    </Tabs>
    
  );
}
