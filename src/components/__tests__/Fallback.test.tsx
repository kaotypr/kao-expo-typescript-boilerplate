import { create } from "react-test-renderer";

import Fallback from "@components/Fallback";

describe("components/Fallback", () => {
  it("renders correctly", () => {
    const tree = create(<Fallback />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has 1 child", () => {
    const tree: any = create(<Fallback />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
