import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	eslintPluginPrettierRecommended,
	{
		ignores: ["node_modules/", "dist/", ".astro/"],
	},
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
		},
		rules: {
			"@typescript-eslint/no-require-imports": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ varsIgnorePattern: "Props", ignoreRestSiblings: true },
			],
		},
	},
	{
		files: ["**/*.astro"],
		rules: {
			"prettier/prettier": "off",
			"jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
				},
			],
		},
	}
);
