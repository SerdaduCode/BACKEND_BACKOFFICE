import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsparser from "@typescript-eslint/parser";

export default [{
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            parser: tsparser,
            globals: globals.node,
        },
    },
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];