import axios from "axios";

export const client = axios.create({
  baseURL: "https://togetherwe.vercel.app/api",
  headers: {
    Accept: "application/json",
    // "x-api-key": "RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch",
  },
});

