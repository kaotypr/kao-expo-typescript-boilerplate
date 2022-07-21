import { create, act } from "react-test-renderer";

import HomeScreen from "@screens/HomeScreen";
import withReactNavigationProps from "@screens/__mocks__/withReactNavigationProps";

describe("screens/HomeScreen", () => {
  it("should match snapshot", () => {
    const withNavigationProps = withReactNavigationProps(HomeScreen);
    const result = create(withNavigationProps).toJSON();
    act(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
