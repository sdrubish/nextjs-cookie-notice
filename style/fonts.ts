import { Pacifico, Roboto } from "next/font/google";
// import localFont from 'next/font/local'

// define your variable fonts
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const roboto100 = Roboto({ subsets: ["latin"], weight: ["100"] });
const roboto300 = Roboto({ subsets: ["latin"], weight: ["300"] });
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: "./GreatVibes-Regular.ttf" });

export { pacifico, roboto100, roboto300 };
