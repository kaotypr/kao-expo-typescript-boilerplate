import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";

import { RootStackParamList } from "@@types/navigations/root";
import Fallback from "@components/Fallback";
import AboutScreen from "@screens/AboutScreen";
import HomeScreen from "@screens/HomeScreen";
import { APP_NAME } from "@services/constants/extra";
import { SCREEN_NAMES } from "@services/constants/screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const appName = useMemo(() => APP_NAME, []);

  return (
    <NavigationContainer fallback={<Fallback />}>
      <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME} screenOptions={{ title: appName }}>
        <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAMES.ABOUT} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
