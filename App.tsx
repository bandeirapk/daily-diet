import { StatusBar, View } from "react-native"

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from "@expo-google-fonts/nunito-sans"
import { ThemeProvider } from "styled-components/native"

import theme from "@/theme"

import { Home } from "@/screens/Home"
import { Statistics } from "@/screens/Statistics"
import { RegisterMeal } from "@/screens/RegisterMeal"
import { Feedback } from "@/screens/Feedback"

import { Loading } from "@/components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Statistics /> : <Loading />}
      </View>
    </ThemeProvider>
  )
}
