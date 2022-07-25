import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SCREEN_NAMES } from "@services/constants/screen";

type RootStackParamList = {
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.ABOUT]: undefined;
};

type RootStackProps<ScreenName> = NativeStackScreenProps<RootStackParamList, ScreenName>;
