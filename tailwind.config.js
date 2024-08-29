/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],  theme: {
    fontSize: {
      sm: '12px',
      base: '14px',
    },
    lineHeight: {
      'loose': '14.26px',
      'normal': '18px',
    },
    extend: {
      backgroundImage: {
        'message_tail': 'url(../assets/images/message_tail.svg)',
      }
    },
  },
  plugins: [],
}

