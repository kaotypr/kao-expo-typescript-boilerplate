/* eslint-disable no-console */
import React, { PureComponent, ErrorInfo, ReactNode } from "react";
import { Text, View } from "react-native";

import { APP_NAME } from "@services/constants/extra";

interface IProps {
  children: ReactNode;
  isConsoleError?: boolean;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends PureComponent<IProps, IState> {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const { isConsoleError = true } = this.props;
    if (isConsoleError) {
      console.groupCollapsed(`ERROR ${APP_NAME} Occured!!!`);
      console.error("[ErrorBoundary] Error message:", error.message);
      console.error("[ErrorBoundary] Error stack:", error.stack);
      console.error("[ErrorBoundary] Component stack:", info.componentStack);
      console.groupEnd();
    }
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <View testID="error-boundary-root">
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
            Oops Something Went Wrong!
          </Text>
        </View>
      );
    }

    return <>{children}</>;
  }
}

export default ErrorBoundary;
