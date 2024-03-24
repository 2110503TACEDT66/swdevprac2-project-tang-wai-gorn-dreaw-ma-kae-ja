'use client'
import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({children}: {children:React.ReactNode}){

    let reduxPersistor = persistStore(store)

    return(
        <PersistGate loading={null} persistor={reduxPersistor}>
            <ReactReduxProvider store={store}>
                {children}
            </ReactReduxProvider>
        </PersistGate>
    )
}