import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Statistic } from '@screens/Statistic';
import { NewMeal } from '@screens/NewMeal';
import { Feedback } from '@screens/Feedback';
import { Meal } from '@screens/Meal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="statistic"
        component={Statistic}
      />

      <Screen
        name="new"
        component={NewMeal}
      />

      <Screen
        name="feedback"
        component={Feedback}
      />

      <Screen
        name="meal"
        component={Meal}
      />
    </Navigator>
  );
}
