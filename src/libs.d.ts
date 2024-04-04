declare module "eslint-plugin-i";
declare module "eslint-plugin-only-warn";
declare module "eslint-plugin-perfectionist/configs/recommended-natural";
declare module "eslint-plugin-security";
declare module "eslint-plugin-n";
declare module "eslint-plugin-regexp";
declare module "eslint-plugin-solid";
declare module "eslint-config-prettier" {
  import { type RulesRecord } from "eslint";
  const rules: RulesRecord;
  export default { rules };
}
