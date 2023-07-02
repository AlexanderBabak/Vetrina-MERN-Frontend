import { extendTheme } from "native-base";

const newColorTheme = {
  primary: {
    blue: {
      main: "#21B8F9",
      700: "#64CDFB",
    },
    purple: "#6979F8",
    lila: "#BE52F2",
    red: "#F33451",
    orange: "#FFA26B",
    sunflower: "#FFCF5C",
    green: "#00C48C",
  },
  neutral: {
    black: {
      default: "#103B66",
      transparent: "#0A254052",
      100: "#E7E9EC",
      200: "#CED3D9",
      300: "#B6BEC6",
      400: "#8592A0",
      500: "#6C7C8C",
      600: "#6C7C8C",
      700: "#546679",
      800: "#3B5166",
      900: "#233B53",
    },
    white: "#ffffff",
  },
};

const newFontConfigTheme = {
  NotoSans: {
    400: {
      normal: "NotoSans-Regular",
    },
    500: {
      normal: "NotoSans-Medium",
    },
  },
  SourceSansPro: {
    500: {
      normal: "SourceSansPro-Regular",
    },
    600: {
      normal: "SourceSansPro-SemiBold",
    },
  },
};

const newFontsTheme = {
  heading: "NotoSans",
  body: "SourceSansPro",
  mono: "Rubik",
};

type themeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends themeType {}
}

export const theme = extendTheme({
  colors: newColorTheme,
  fontConfig: newFontConfigTheme,
  fonts: newFontsTheme,
});
