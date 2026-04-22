import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack 
      initialRouteName='welcome'
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: {backgroundColor: "black"}
      }}/>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
