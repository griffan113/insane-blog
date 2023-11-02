import { Roboto, Roboto_Slab } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-roboto",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const styles = {
  colors: {
    primary: "text-green-600 dark:text-green-400",
  },
  fonts: {
    sans: {
      roboto,
      roboto_slab,
    },
  },
};
