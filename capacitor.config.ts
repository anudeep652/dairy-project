import { CapacitorConfig } from "@capacitor/cli";
import { App as CapacitorApp } from "@capacitor/app";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "ScholrConnect",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

CapacitorApp.addListener("backButton", ({ canGoBack }) => {
  if (!canGoBack) {
    CapacitorApp.exitApp();
  } else {
    window.history.back();
  }
});

export default config;
