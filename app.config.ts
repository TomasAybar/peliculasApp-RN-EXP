import "dotenv/config";

export interface AppConfig {
  API_KEY: string;
  API_URI: string;
}

export default {
  name: "-peliculasapp",
  version: "1.0.0",
  extra: {
    API_KEY: process.env.API_KEY,
    API_URI: process.env.API_URI,
  },
};
