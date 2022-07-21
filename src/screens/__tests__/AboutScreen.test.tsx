import { create, act } from "react-test-renderer";

import AboutScreen from "@screens/AboutScreen";
import withReactNavigationProps from "@screens/__mocks__/withReactNavigationProps";

describe("screens/AboutScreen", () => {
  it("should match snapshot", () => {
    const withNavigationProps = withReactNavigationProps(AboutScreen);
    const result = create(withNavigationProps).toJSON();
    act(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
