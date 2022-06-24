import React from "react";
import { create } from "react-test-renderer";

import App from "./App";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has 1 child", () => {
    const tree: any = create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
