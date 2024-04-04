import pluginSecurity from "eslint-plugin-security";
import { defineConfig } from "../util/define-config.js";

export const security = defineConfig([pluginSecurity.configs.recommended]);
