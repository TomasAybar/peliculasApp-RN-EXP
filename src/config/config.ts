import Constants from "expo-constants";
import { AppConfig } from "../../app.config";

export const { API_URI, API_KEY } = Constants.manifest?.extra as AppConfig;
