import { Button, Text, View } from "react-native";

import { RootStackProps } from "@@types/navigations/root";
import { SCREEN_NAMES } from "@services/constants/screen";

type HomeScreenParamsType = RootStackProps<SCREEN_NAMES.HOME>;

const HomeScreen = ({ navigation }: HomeScreenParamsType) => {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home Screen</Text>
      <Button title="About" onPress={() => navigation.navigate(SCREEN_NAMES.ABOUT)} />
    </View>
  );
};

export default HomeScreen;
