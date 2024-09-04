import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'primary-light': '#FFFFFF',
        'secondary-light': '#DFE6E9',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#383838',
        'secondary-dark': '#212121',
        'ternary-dark': '#141414',

        'primary-green': '#13c4a5',
        'secondary-green': '#138ba5',
        'ternary-green': '#064452',
        'quaternary-green': '#03262e'
      }
    }
  },
  plugins: []
}
export default config
