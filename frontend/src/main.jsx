import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "@services/reducers";
import { Reset } from "styled-reset";
import { ToastContainer } from "react-toastify";
import Header from "@components/Header";
import Footer from "@components/Footer";
import GlobalStyle from "./GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Header />
      <App />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
