import { create, act } from "react-test-renderer";

import App from "../App";

describe("App", () => {
  it("should match snapshot", () => {
    const result = create(<App />).toJSON();
    act(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
