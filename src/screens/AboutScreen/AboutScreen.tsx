import { Button, Text, View } from "react-native";

import { RootStackProps } from "@@types/navigations/root";
import { SCREEN_NAMES } from "@services/constants/screen";

type AboutScreenParamsType = RootStackProps<SCREEN_NAMES.ABOUT>;

const AboutScreen = ({ navigation }: AboutScreenParamsType) => {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>About Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate(SCREEN_NAMES.HOME)} />
    </View>
  );
};

export default AboutScreen;
