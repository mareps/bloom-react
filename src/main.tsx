import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,

        token: {
          // Seed Token
          colorPrimary: "#7A77B9",
          borderRadius: 30,
          colorTextBase: "#333",
          fontSize: 16,
          fontFamily: "Ubuntu",
          colorPrimaryBg: "#f45555",
          colorBgBase: "#f4f4f4"
        },
      }}
    >
      <App/>
    </ConfigProvider>
  </React.StrictMode>,
);
