import { Component } from "react";
import { Text } from "react-native";
import { create, act } from "react-test-renderer";

import ErrorBoundary from "@components/ErrorBoundary";

class TriggerError extends Component<any, any> {
  // this components triggers error by rendering undefined state key
  render() {
    return <Text>{this.state.undefinedStateKey}</Text>;
  }
}

describe("components/ErrorBoundary", () => {
  it("renders correctly", () => {
    expect.assertions(2);

    const tree = create(
      <ErrorBoundary isConsoleError={false}>
        <TriggerError />
      </ErrorBoundary>
    ).toJSON();

    act(() => {
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveProperty("props.testID", "error-boundary-root");
    });
  });
});
