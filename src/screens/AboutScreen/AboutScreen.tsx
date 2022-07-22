import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import { RootStackProps } from "@@types/navigations/root";
import EXTRA from "@services/constants/extra";
import { SCREEN_NAMES } from "@services/constants/screen";
import globalStyles from "@styles/_global";

type AboutScreenParamsType = RootStackProps<SCREEN_NAMES.ABOUT>;

const AboutScreen = ({ navigation }: AboutScreenParamsType) => (
  <SafeAreaView style={[globalStyles.fullscreen, { backgroundColor: "#919ff0" }]}>
    <StatusBar barStyle="dark-content" backgroundColor="#919ff0" />
    <View>
      <Text style={[globalStyles.titleText, { color: "#232323" }]}>About Screen</Text>
      <Text>{JSON.stringify(EXTRA, null, 2)}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.HOME)}>
        <Text style={{ color: "#434343", textAlign: "center" }}>back to home screen ?</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default AboutScreen;
