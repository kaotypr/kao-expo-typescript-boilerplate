import React from "react";

export const createTestScreenProps = (props?: object) => ({
  navigation: {
    state: { params: {} },
    dispatch: jest.fn(),
    goBack: jest.fn(),
    dismiss: jest.fn(),
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
    toggleDrawer: jest.fn(),
    getParam: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn()
  },
  ...props
});

const withReactNavigationProps = (Component: any) => {
  const navigationProps = createTestScreenProps();

  return <Component {...navigationProps} />;
};

export default withReactNavigationProps;
