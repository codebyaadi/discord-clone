import { Prompt } from "next/font/google";
import { Open_Sans } from "next/font/google";

export const fontPrompt = Prompt({
    weight: ["300","400","500"],
    subsets: ["latin"],
    variable: "--font-prompt",
    display: "swap",
});

export const fontOpenSans = Open_Sans({ 
    subsets: ["latin"],
    variable: "--font-opensans",
    display: "swap",
 });