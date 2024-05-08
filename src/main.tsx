import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider, ThemeConfig } from "antd";


const config: ThemeConfig = {
  token: {
    colorPrimary: "#40B3A2",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={config} >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
