import { GuestNavigation, UserNavigation } from "./constants";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const userStackScreen = () => {
  return UserNavigation.map((navigation) => (
    <Stack.Screen
      key={navigation.name}
      name={navigation.name}
      component={navigation.component}
    />
  ));
};

export const guestStackScreen = () => {
  return GuestNavigation.map((navigation) => (
    <Stack.Screen
      key={navigation.name}
      name={navigation.name}
      component={navigation.component}
    />
  ));
};
