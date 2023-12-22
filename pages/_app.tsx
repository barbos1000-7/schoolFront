import "@/styles/globals.scss";
import type {AppProps} from "next/app";
import Layout from "@/components/UI/layout/Layout";
import {ToastContainer} from "react-toastify";
import React from "react";
// import {ConfigProvider} from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "@/app/reducers";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Layout>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        progressStyle={{
                            color: 'red',
                        }}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="dark"
                    />
                    <Component {...pageProps} />
                </Layout></Provider>
        </>);
}
