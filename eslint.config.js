//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config"
import eslintPluginPrettier from "eslint-plugin-prettier"

export default [
  ...tanstackConfig,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
]
