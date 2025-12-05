import { CustomThemeConfig } from "tailwindcss/types/config";

const colorVarWithAlphaValue = (variable: string) =>
  `color-mix(in srgb, ${variable} calc(100% * <alpha-value>), transparent)`;

const colors = {
  background: colorVarWithAlphaValue("var(--background)"),
  body: colorVarWithAlphaValue("var(--body)"),
  border: colorVarWithAlphaValue("var(--border)"),
  muted: colorVarWithAlphaValue("var(--muted)"),
  destructive: colorVarWithAlphaValue("var(--destructive)"),
  supportive: {
    1: colorVarWithAlphaValue("var(--supportive-01)"),
    muted: {
      1: colorVarWithAlphaValue("var(--supportive-muted-01)"),
    },
  },
} satisfies CustomThemeConfig["colors"];

export default colors;
