/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import React from "react";
import store from "./src/redux/store";
import App from "./src/App";

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
