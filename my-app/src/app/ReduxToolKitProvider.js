"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./redux-toolkit/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxToolKitProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading cart...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
