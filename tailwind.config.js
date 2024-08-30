/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [require('tailwind-hamburgers')],
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {

    colors: {
      'white': '#ffffff',
      'primary': { //red
        100: "#FECACA",
        200: "#FCA5A5",
        300: "#F87171",
        400: "#DC2626",
        DEFAULT: "#B91C1C",
        600: "991B1B",
      },
      
      'secondary': { //gray
        100: "#94A3B8",
        200: "#64748B",
        300: "#475569",
        DEFAULT: "#334155",
        500: "#1E293B",
        600: "#0F172A",
      },

      'gray': { //gray-light
        100: "#F2F2F2",
        200: "#E5E5E5",
        300: "#B2B2B2",
      },
    },

    fontSize: {
      "8xl": ["72px", {
        lineHeight: '80px',
        letterSpacing: "-4.5px",
        fontWeight: '600',
      }],
      "7xl": ["55px", {
        lineHeight: '60px',
        letterSpacing: "-2.5px",
        fontWeight: '600',
      }],
      "6xl": ["48px", {
        lineHeight: '54px',
        letterSpacing: "-1.6px",
        fontWeight: '600',
      }],
      xl: ["24px", {
        lineHeight: '30px',
        letterSpacing: "-0.8px",
        fontWeight: '500',
      }],
      lg: ["24px",{
        lineHeight: '22px',
        letterSpacing: "-0.5px",
        fontWeight: '800',
      }],
      base: ["21px", {
        lineHeight: '30px',
        letterSpacing: "-0.8px",
        fontWeight: '400',
      }],
      sm: ["17px", {
        lineHeight: '25px',
        letterSpacing: '-0.7px',
        fontWeight: '400',
      }],

      light: ["12px", {
        lineHeight: '20px',
        letterSpacing: '-0.3px',
        fontWeight: '500',
      }],

      caption1: ["16px", {
        lineHeight: '18px',
        letterSpacing: '-0.5px',
        fontWeight: '500',
      }],
      caption2: ["18px", {
        lineHeight: '20px',
        letterSpacing: '-0.3px',
        fontWeight: '500',
      }],
      caption3: ["20px", {
        lineHeight: '24px',
        letterSpacing: '-0.6px',
        fontWeight: '500',
      }],
      caption4: ["24px", {
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '600',
      }],
      
    },

    borderRadius: {
      DEFAULT: '10px',
      full: '9999px',
    },

    extend: {},
  },
  plugins: [],
}