import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 
  plugins: [require("daisyui")],
 daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#60a5fa",
          
 "secondary": "#8ffc97",
          
 "accent": "#ef47a1",
          
 "neutral": "#3c273f",
          
 "base-100": "#93c5fd",
          
 "info": "#9cd6e8",
          
 "success": "#1d9579",
          
 "warning": "#c17115",
          
 "error": "#fc4a53",
          },
        },
      ],
    },
}
export default config
