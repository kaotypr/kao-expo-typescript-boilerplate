import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "@@types/navigations/root";
import Fallback from "@components/Fallback";
import AboutScreen from "@screens/AboutScreen";
import HomeScreen from "@screens/HomeScreen";
import { SCREEN_NAMES } from "@services/constants/screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer fallback={<Fallback />}>
      <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAMES.ABOUT} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
