# Kao Expo Typescript Boilerplate

This boilerplate was initialized with `expo-cli` and i choose `yarn` as package manager for faster installing cached packages. This boilerplate includes some default configuration like:

- `prettier` - **Code Formatter** that configured by `.prettierrc` file
- `eslint` - linter integrated with prettier config
- vscode shareable settings file - `.vscode/settings.json`
- `jest` & `jest-expo` configurations for typescript
- `husky` - **Git Hooks** with [`jest`](https://jestjs.io/docs/getting-started) test as pre-commit hook and [`git-cz`](https://github.com/streamich/git-cz) for preparing commit message
- `dontenv` & `expo-constants` for environment variable usage
- example file of `.env`
- react navigation libraries: `@react-navigation/native` and `@react-navigation/native-stack`

## Available Scripts

In the project directory, run:

### `yarn start`

Runs `expo start` command. For emulator, run with `--ios` or `--android`

### `yarn test`

Runs jest test, use command `yarn test:update` or `yarn test --update` to update snapshot,
`yarn test` has been set as one of git hook command `pre-commit`

### `yarn prepare`

Runs `husky install` command to install new / updated Git Hooks in folder `.husky/*`

### `yarn lint`

Runs linter checking, `yarn lint --fix` has been set as one of git hook command `pre-commit`

## Folder Structures

```md
├── src                         # src folder
    ├── @types                  # definitions type folder
        ├── navigations         # navigations definitions type folder
            ├── root.d.ts       # every navigations should have a StackParamList & StacProps type
    ├── app                     # app folder / index folder
        ├── App.tsx             # whole app root
        ├── index.ts            # main file / App.tsx expo register
    ├── assets                  # assets folder
    ├── components              # global components folder
        ├── __tests__           # global components tests folder
    ├── contexts                # global contexts folder
    ├── hooks                   # global hooks folder
    ├── navigations             # navigations folder
        ├── root.ts             # navigations root file
    ├── screens                 # screens folder
        ├── __tests__           # screens tests folder
        ├── HomeScreen          # example of a screen folder
    ├── services                # services top folder
        ├── apis                # service api folder
        ├── constants           # services constants folder
            ├── extra.ts        # services constants from extra in app.config.ts
            ├── screen.ts       # services constants of all screen names
        ├── utils               # services utils folder
            ├── __tests__       # services utils tests folder
    ├── styles                  # global styles folder
```

## Create New Navigation
To create a new navigation, define its screen name first in `serc/services/constants/screen.ts`.
For example, create a an auth navigation which includes `SIGNIN` and `SIGNUP` screens

edit `src/services/constants/screen.ts`
```ts
export enum SCREEN_NAMES {
    // ...other screens,
    AUTH_NAV = "AuthNavigation",
    SIGNIN = "Signin",
    SIGNUP = "Signup"
}
```
notice there's three screen names, the `AUTH_NAV` is for a `Navigation Component Stack Screen` that will be the parent of `SIGNIN` and `SIGNUP` sceen.

after that, defined the navigation stack param list in `src/@types/navigations/auth.ts`
```ts
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SCREEN_NAMES } from "@services/constants/screen";

type AuthStackParamList = {
  [SCREEN_NAMES.SIGNIN]: undefined; // edit this `undefined` to any parameter object that needed to be passed into the screen
  [SCREEN_NAMES.SIGNUP]: undefined;
};

type AuthStackProps<ScreenName> = NativeStackScreenProps<AuthStackParamList, ScreenName>;
```

after that, need to initiate the `SigninScreen` and `SignupScreen`,
for example in `src/screens/Signin/SigninScreen.tsx`:
```ts
import { AuthStackProps } from "@@types/navigations/auth";
import { SCREEN_NAMES } from "@services/constants/screen";

const SignupScreen = (props: AuthStackProps<SCREEN_NAMES.SIGNIN>) => {
    return null;
}

export default SigninScreen;
```

and then, create the auth navigation in `src/navigations/auth.tsx`
```ts
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "@@types/navigations/auth";
import SignupScreen from "@screens/SignupScreen";
import SigninScreen from "@screens/SigninScreen";
import { SCREEN_NAMES } from "@services/constants/screen";

/**
 * By passing AuthStackParamList, 
 * typescript will know any parameter and props that passed to the screen by react-navigations
 **/
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.SIGNIN}>
      <Stack.Screen name={SCREEN_NAMES.SIGNIN} component={SigninScreen} />
      <Stack.Screen name={SCREEN_NAMES.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
```

for the final step, include the `AuthNavigation` component into the root stack navigations
so, edit the `src/navigations/root.tsx`
```tsx
// ...
import AuthNavigation from "./auth.tsx";

const RootNavigation = () => {
  return (
    <NavigationContainer fallback={<Fallback />}>
      <Stack.Navigator initialRouteName={SCREEN_NAMES.AUTH_NAV} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREEN_NAMES.AUTH_NAV} component={AuthNavigation} />
        <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAMES.ABOUT} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
```