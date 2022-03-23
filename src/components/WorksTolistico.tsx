import { useColorMode } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "./Header";

export const WorksTolistico: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return(
    <div>
      <Header />
      <h1>tanigawa</h1>
    </div>
  )
});
