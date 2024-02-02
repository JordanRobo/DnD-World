
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Marcellus, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "var(--color-secondary-500)",
		"--theme-font-color-dark": "var(--color-primary-300)",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-500)",
		"--on-secondary": "var(--color-primary-300)",
		"--on-tertiary": "var(--color-secondary-500)",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "var(--color-primary-500)",
		// =~= Theme Colors  =~=
		// primary | #fff7dc 
		"--color-primary-50": "255 254 250", // #fffefa
		"--color-primary-100": "255 253 248", // #fffdf8
		"--color-primary-200": "255 253 246", // #fffdf6
		"--color-primary-300": "255 252 241", // #fffcf1
		"--color-primary-400": "255 249 231", // #fff9e7
		"--color-primary-500": "255 247 220", // #fff7dc
		"--color-primary-600": "230 222 198", // #e6dec6
		"--color-primary-700": "191 185 165", // #bfb9a5
		"--color-primary-800": "153 148 132", // #999484
		"--color-primary-900": "125 121 108", // #7d796c
		// secondary | #064e53 
		"--color-secondary-50": "218 228 229", // #dae4e5
		"--color-secondary-100": "205 220 221", // #cddcdd
		"--color-secondary-200": "193 211 212", // #c1d3d4
		"--color-secondary-300": "155 184 186", // #9bb8ba
		"--color-secondary-400": "81 131 135", // #518387
		"--color-secondary-500": "6 78 83", // #064e53
		"--color-secondary-600": "5 70 75", // #05464b
		"--color-secondary-700": "5 59 62", // #053b3e
		"--color-secondary-800": "4 47 50", // #042f32
		"--color-secondary-900": "3 38 41", // #032629
		// tertiary | #2dd4bf 
		"--color-tertiary-50": "224 249 245", // #e0f9f5
		"--color-tertiary-100": "213 246 242", // #d5f6f2
		"--color-tertiary-200": "203 244 239", // #cbf4ef
		"--color-tertiary-300": "171 238 229", // #abeee5
		"--color-tertiary-400": "108 225 210", // #6ce1d2
		"--color-tertiary-500": "45 212 191", // #2dd4bf
		"--color-tertiary-600": "41 191 172", // #29bfac
		"--color-tertiary-700": "34 159 143", // #229f8f
		"--color-tertiary-800": "27 127 115", // #1b7f73
		"--color-tertiary-900": "22 104 94", // #16685e
		// success | #52ce00 
		"--color-success-50": "229 248 217", // #e5f8d9
		"--color-success-100": "220 245 204", // #dcf5cc
		"--color-success-200": "212 243 191", // #d4f3bf
		"--color-success-300": "186 235 153", // #baeb99
		"--color-success-400": "134 221 77", // #86dd4d
		"--color-success-500": "82 206 0", // #52ce00
		"--color-success-600": "74 185 0", // #4ab900
		"--color-success-700": "62 155 0", // #3e9b00
		"--color-success-800": "49 124 0", // #317c00
		"--color-success-900": "40 101 0", // #286500
		// warning | #ffcd7b 
		"--color-warning-50": "255 248 235", // #fff8eb
		"--color-warning-100": "255 245 229", // #fff5e5
		"--color-warning-200": "255 243 222", // #fff3de
		"--color-warning-300": "255 235 202", // #ffebca
		"--color-warning-400": "255 220 163", // #ffdca3
		"--color-warning-500": "255 205 123", // #ffcd7b
		"--color-warning-600": "230 185 111", // #e6b96f
		"--color-warning-700": "191 154 92", // #bf9a5c
		"--color-warning-800": "153 123 74", // #997b4a
		"--color-warning-900": "125 100 60", // #7d643c
		// error | #ff2062 
		"--color-error-50": "255 222 231", // #ffdee7
		"--color-error-100": "255 210 224", // #ffd2e0
		"--color-error-200": "255 199 216", // #ffc7d8
		"--color-error-300": "255 166 192", // #ffa6c0
		"--color-error-400": "255 99 145", // #ff6391
		"--color-error-500": "255 32 98", // #ff2062
		"--color-error-600": "230 29 88", // #e61d58
		"--color-error-700": "191 24 74", // #bf184a
		"--color-error-800": "153 19 59", // #99133b
		"--color-error-900": "125 16 48", // #7d1030
		// surface | #2e2e2e 
		"--color-surface-50": "224 224 224", // #e0e0e0
		"--color-surface-100": "213 213 213", // #d5d5d5
		"--color-surface-200": "203 203 203", // #cbcbcb
		"--color-surface-300": "171 171 171", // #ababab
		"--color-surface-400": "109 109 109", // #6d6d6d
		"--color-surface-500": "46 46 46", // #2e2e2e
		"--color-surface-600": "41 41 41", // #292929
		"--color-surface-700": "35 35 35", // #232323
		"--color-surface-800": "28 28 28", // #1c1c1c
		"--color-surface-900": "23 23 23", // #171717
		
	}
}