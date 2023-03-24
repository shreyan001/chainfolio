import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider,lightTheme } from "@rainbow-me/rainbowkit";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import App from './App';
import { chains, client } from "./wagmi";
import './App.css';

/**
 * Root providers and initialization of app
 * @see https://reactjs.org/docs/strict-mode.html
 * @see https://wagmi.sh/react/WagmiConfig
 * @see https://www.rainbowkit.com/docs/installation
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
    <RainbowKitProvider chains={chains}
    coolMode
      theme={lightTheme({
        accentColor: '#000',
        accentColorForeground: 'white',
        borderRadius: 'large',
        overlayBlur: 'small',
      })}
    >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
