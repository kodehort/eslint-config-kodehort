const config = {
  // @ts-ignore
  ...require("@kodehort/prettier-config"),
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<TYPES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(@)(app|api|core|e2e|functions|scripts|testing)(/.*)$",
    "",
    "^(~)(/.*)$",
    "",
    "^[./]",
  ],
  importOrderTypeScriptVersion: "5.1.6",
};

module.exports = config;
