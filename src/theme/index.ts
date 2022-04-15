import { extendTheme } from "@chakra-ui/react";

import colors from "./base/colors";
import shadows from "./base/shadows";
import breakpoints from "./base/breakpoints";

import Form from "./components/form";

const customTheme = {
  colors,
  shadows,
  breakpoints,
  components: {
    Form,
  },
};

export default extendTheme(customTheme);
