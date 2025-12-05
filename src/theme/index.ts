import { Config } from "tailwindcss/types/config";

import colors from "./colors";
import container from "./container";

const theme: Config["theme"] = {
  container,
  extend: {
    colors: colors,
  },
};

export default theme;
