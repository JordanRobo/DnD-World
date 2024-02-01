
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Marcellus, ui-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #61f5eb 
		"--color-primary-50": "231 254 252", // #e7fefc
		"--color-primary-100": "223 253 251", // #dffdfb
		"--color-primary-200": "216 253 250", // #d8fdfa
		"--color-primary-300": "192 251 247", // #c0fbf7
		"--color-primary-400": "144 248 241", // #90f8f1
		"--color-primary-500": "97 245 235", // #61f5eb
		"--color-primary-600": "87 221 212", // #57ddd4
		"--color-primary-700": "73 184 176", // #49b8b0
		"--color-primary-800": "58 147 141", // #3a938d
		"--color-primary-900": "48 120 115", // #307873
		// secondary | #347f7a 
		"--color-secondary-50": "225 236 235", // #e1eceb
		"--color-secondary-100": "214 229 228", // #d6e5e4
		"--color-secondary-200": "204 223 222", // #ccdfde
		"--color-secondary-300": "174 204 202", // #aeccca
		"--color-secondary-400": "113 165 162", // #71a5a2
		"--color-secondary-500": "52 127 122", // #347f7a
		"--color-secondary-600": "47 114 110", // #2f726e
		"--color-secondary-700": "39 95 92", // #275f5c
		"--color-secondary-800": "31 76 73", // #1f4c49
		"--color-secondary-900": "25 62 60", // #193e3c
		// tertiary | #1b413f 
		"--color-tertiary-50": "221 227 226", // #dde3e2
		"--color-tertiary-100": "209 217 217", // #d1d9d9
		"--color-tertiary-200": "198 208 207", // #c6d0cf
		"--color-tertiary-300": "164 179 178", // #a4b3b2
		"--color-tertiary-400": "95 122 121", // #5f7a79
		"--color-tertiary-500": "27 65 63", // #1b413f
		"--color-tertiary-600": "24 59 57", // #183b39
		"--color-tertiary-700": "20 49 47", // #14312f
		"--color-tertiary-800": "16 39 38", // #102726
		"--color-tertiary-900": "13 32 31", // #0d201f
		// success | #41e691 
		"--color-success-50": "227 251 239", // #e3fbef
		"--color-success-100": "217 250 233", // #d9fae9
		"--color-success-200": "208 249 228", // #d0f9e4
		"--color-success-300": "179 245 211", // #b3f5d3
		"--color-success-400": "122 238 178", // #7aeeb2
		"--color-success-500": "65 230 145", // #41e691
		"--color-success-600": "59 207 131", // #3bcf83
		"--color-success-700": "49 173 109", // #31ad6d
		"--color-success-800": "39 138 87", // #278a57
		"--color-success-900": "32 113 71", // #207147
		// warning | #fbdd46 
		"--color-warning-50": "254 250 227", // #fefae3
		"--color-warning-100": "254 248 218", // #fef8da
		"--color-warning-200": "254 247 209", // #fef7d1
		"--color-warning-300": "253 241 181", // #fdf1b5
		"--color-warning-400": "252 231 126", // #fce77e
		"--color-warning-500": "251 221 70", // #fbdd46
		"--color-warning-600": "226 199 63", // #e2c73f
		"--color-warning-700": "188 166 53", // #bca635
		"--color-warning-800": "151 133 42", // #97852a
		"--color-warning-900": "123 108 34", // #7b6c22
		// error | #ea66a8 
		"--color-error-50": "252 232 242", // #fce8f2
		"--color-error-100": "251 224 238", // #fbe0ee
		"--color-error-200": "250 217 233", // #fad9e9
		"--color-error-300": "247 194 220", // #f7c2dc
		"--color-error-400": "240 148 194", // #f094c2
		"--color-error-500": "234 102 168", // #ea66a8
		"--color-error-600": "211 92 151", // #d35c97
		"--color-error-700": "176 77 126", // #b04d7e
		"--color-error-800": "140 61 101", // #8c3d65
		"--color-error-900": "115 50 82", // #733252
		// surface | #535a5a 
		"--color-surface-50": "229 230 230", // #e5e6e6
		"--color-surface-100": "221 222 222", // #dddede
		"--color-surface-200": "212 214 214", // #d4d6d6
		"--color-surface-300": "186 189 189", // #babdbd
		"--color-surface-400": "135 140 140", // #878c8c
		"--color-surface-500": "83 90 90", // #535a5a
		"--color-surface-600": "75 81 81", // #4b5151
		"--color-surface-700": "62 68 68", // #3e4444
		"--color-surface-800": "50 54 54", // #323636
		"--color-surface-900": "41 44 44", // #292c2c
		
	}
}