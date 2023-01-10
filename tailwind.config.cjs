/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkDesaturatedCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkModerateCyan: "hsl(168, 34%, 41%)",
        vDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        vDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
      },
      backgroundImage: {
        "hero-section-desktop": "url('/images/desktop/image-header.jpg')",
        "hero-section-mobile": "url('/images/mobile/image-header.jpg')",
        "offers-graphic-desktop": "url('/images/desktop/image-graphic-design.jpg')",
        "offers-graphic-mobile": "url('/images/mobile/image-graphic-design.jpg')",
        "offers-photography-desktop": "url('/images/desktop/image-photography.jpg')",
        "offers-photography-mobile": "url('/images/mobile/image-photography.jpg')",
        triangle:
          "linear-gradient(to bottom right, transparent, transparent 50%, #fff 50%, #fff 100%)",
      },
    },
    fontFamily: {
      barlow: ["Barlow"],
      fraunces: ["Fraunces"],
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
