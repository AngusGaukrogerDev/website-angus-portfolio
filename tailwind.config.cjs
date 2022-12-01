/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      monochromelight: {
          
        "primary": "#1f2937",
                 
        "secondary": "#4b5563",
                 
        "accent": "#9ca3af",
                 
        "neutral": "#9ca3af",
                 
        "base-100": "#f3f4f6",
                 
        "info": "#9ca3af",
                 
        "success": "#2BD4BD",
                 
        "warning": "#F4C152",
                 
        "error": "#FB6F84",
        },
        monochromedark: {

        "primary": "#f3f4f6",
                  
        "secondary": "#e5e7eb",
                  
        "accent": "#d1d5db",
                  
        "neutral": "#6b7280",
                  
        "base-100": "#111827",
                  
        "info": "#d1d5db",
                  
        "success": "#2BD4BD",
                  
        "warning": "#F4C152",
                  
        "error": "#FB6F84",
                  },
    }],
    
  },
}
