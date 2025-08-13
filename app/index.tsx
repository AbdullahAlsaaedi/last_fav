import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text style={{ fontSize: 24 }}>Welcome to Spotify App</Text>
      <TouchableOpacity 
        onPress={() => router.push('/music')}
        style={{ backgroundColor: '#1DB954', padding: 15, borderRadius: 10 }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}