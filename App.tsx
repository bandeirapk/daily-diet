import { View } from "react-native"

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans"
import { ThemeProvider } from "styled-components/native"

import theme from "@/theme"

import { Home } from "@/screens/Home"

import { Loading } from "@/components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
        }}
      >
        {fontsLoaded ? <Home /> : <Loading />}
      </View>
    </ThemeProvider>
  )
}
