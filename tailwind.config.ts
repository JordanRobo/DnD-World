import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './my-custom-theme'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				teal: {
				  css: {
					'--tw-prose-body': theme('colors.teal[800]'),
					'--tw-prose-headings': theme('colors.teal[900]'),
					'--tw-prose-lead': theme('colors.teal[700]'),
					'--tw-prose-links': theme('colors.teal[900]'),
					'--tw-prose-bold': theme('colors.teal[900]'),
					'--tw-prose-counters': theme('colors.teal[600]'),
					'--tw-prose-bullets': theme('colors.teal[400]'),
					'--tw-prose-hr': theme('colors.teal[300]'),
					'--tw-prose-quotes': theme('colors.teal[900]'),
					'--tw-prose-quote-borders': theme('colors.teal[300]'),
					'--tw-prose-captions': theme('colors.teal[700]'),
					'--tw-prose-code': theme('colors.teal[900]'),
					'--tw-prose-pre-code': theme('colors.teal[100]'),
					'--tw-prose-pre-bg': theme('colors.teal[900]'),
					'--tw-prose-th-borders': theme('colors.teal[300]'),
					'--tw-prose-td-borders': theme('colors.teal[200]'),
					'--tw-prose-invert-body': theme('colors.orange[50]'),
					'--tw-prose-invert-headings': theme('colors.orange[50]'),
					'--tw-prose-invert-lead': theme('colors.teal[300]'),
					'--tw-prose-invert-links': theme('colors.orange[50]'),
					'--tw-prose-invert-bold': theme('colors.orange[50]'),
					'--tw-prose-invert-counters': theme('colors.teal[400]'),
					'--tw-prose-invert-bullets': theme('colors.teal[300]'),
					'--tw-prose-invert-hr': theme('colors.teal[700]'),
					'--tw-prose-invert-quotes': theme('colors.orange[50]'),
					'--tw-prose-invert-quote-borders': theme('colors.teal[400]'),
					'--tw-prose-invert-captions': theme('colors.orange[50]'),
					'--tw-prose-invert-code': theme('colors.orange[50]'),
					'--tw-prose-invert-pre-code': theme('colors.teal[300]'),
					'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
					'--tw-prose-invert-th-borders': theme('colors.teal[600]'),
					'--tw-prose-invert-td-borders': theme('colors.teal[700]'),
				  },
				},
			  }),
			
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					myCustomTheme
				]
			},
		}),
	],
} satisfies Config;
