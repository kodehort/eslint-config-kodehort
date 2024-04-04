import regexpPlugin from "eslint-plugin-regexp";
import { defineConfig } from "../util/define-config.js";

export const regex = defineConfig([regexpPlugin.configs["flat/recommended"]]);
