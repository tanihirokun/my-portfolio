import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // ボディーで全体の設定
        color: "gray.600",
      },
    },
  },
});

export default theme;
