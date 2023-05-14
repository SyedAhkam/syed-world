import { Fira_Code, Fira_Mono } from "next/font/google";

export const fira_code = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const fira_mono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
});
