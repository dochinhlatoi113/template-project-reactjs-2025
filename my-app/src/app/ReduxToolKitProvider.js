"use client";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store/store";

export default function ReduxToolKitProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
