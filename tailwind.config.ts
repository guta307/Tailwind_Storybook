function toRgba(cssVariable: any) {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }: any) => `rgba(${color}, ${opacityValue})`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mulish: "Mulish, sans-serif",
    },
    screens: {
      mobile: "var(--screen-mobile)",
      tablet: "var(--screen-tablet)",
      desktop: "var(--screen-desktop)",
      tv: "var(--screen-tv)",
    },
    spacing: {
      "fit-content": "var(--fit-content)",
      none: "var(--spacing-none) /* 0px */",
      "10xs": "var(--spacing-10xs) /* 2px */",
      "8xs": "var(--spacing-8xs) /* 4px */",
      "4xs": "var(--spacing-4xs) /* 8px */",
      "2xs": "var(--spacing-2xs) /* 12px */",
      xs: "var(--spacing-xs) /* 16px */",
      sm: "var(--spacing-sm) /* 20px */",
      md: "var(--spacing-md) /* 24px */",
      lg: "var(--spacing-lg) /* 32px */",
      xl: "var(--spacing-xl) /* 40px */",
      "2xl": "var(--spacing-2xl) /* 48px */",
      "4xl": "var(--spacing-4xl) /* 56px */",
      "8xl": "var(--spacing-8xl) /* 60px */",
      "9xl": "var(--spacing-9xl) /* 64px */",
      "10xl": "var(--spacing-10xl) /* 68px */",
      "11xl": "var(--spacing-11xl) /* 72px */", // New addition for 72px
      "11_75xl": "var( --spacing-11_75xl) /* 78px */", // New addition for 72px
      "12xl": "var(--spacing-12xl) /* 80px */",
      "14xl": "var(--spacing-14xl) /* 94px */", // Previously 20xl, now for 94px
      "16xl": "var(--spacing-16xl) /* 118px */", // Previously 21xl, now for 118px
      0.1: "var(--spacing-12xs) /* 1px */", // Additional size for 1px
      0.5: "var(--spacing-8xs) /* 4px */",
      1: "var(--spacing-4xs) /* 8px */",
      "1.5": "10px", // Custom addition for 10px
      2: "var(--spacing-2xs) /* 12px */",
      3: "var(--spacing-xs) /* 16px */",
      4: "var(--spacing-sm) /* 20px */",
      5: "var(--spacing-md) /* 24px */",
      6: "var(--spacing-lg) /* 32px */",
      7: "var(--spacing-xl) /* 40px */",
      8: "var(--spacing-2xl) /* 48px */",
      9: "var(--spacing-4xl) /* 56px */",
      10: "var(--spacing-8xl) /* 60px */",
      11: "var(--spacing-10xl) /* 68px */",
      12: "var(--spacing-12xl) /* 80px */",
      13: "var(--spacing-13xl) /* 94px */", // As
      xxl1: "var(--spacing-xxl1) /* 150px */",
      xxl2: "var(--spacing-xxl2) /* 250px */",
      xxl3: "var(--spacing-xxl3) /* 268px */",
      xxl4: "var(--spacing-xxl4) /* 293px */",
      xxl5: "var(--spacing-xxl5) /* 310px */",
      xxl6: "var(--spacing-xxl6) /* 315px */",
      xxl7: "var(--spacing-xxl7) /* 340px */",
      xxl8: "var(--spacing-xxl8) /* 360px */",
      xxl9: "var(--spacing-xxl9) /* 370px */",
      xxl10: "var(--spacing-xxl10) /* 400px */",
      xxl11: "var(--spacing-xxl11) /* 422px */",
      xxl12: "var(--spacing-xxl12) /* 424px */",
      xxl13: "var(--spacing-xxl13) /* 446px */",
      xxl14: "var(--spacing-xxl14) /* 480px */",
      xxl15: "var(--spacing-xxl15) /* 518px */",
      xxl16: "var(--spacing-xxl16) /* 569px */",
      xxl17: "var(--spacing-xxl17) /* 640px */",
      xxl18: "var(--spacing-xxl18) /* 658px */",
      xxl19: "var(--spacing-xxl19) /* 698px */",
      xxl20: "var(--spacing-xxl20) /* 800px */",
      xxl21: "var(--spacing-xxl21) /* 1000px */",
      xxl22: "var(--spacing-xxl22) /* 1032px */",
      xxl23: "var(--spacing-xxl23) /* 1080px */",
      xxl24: "var(--spacing-xxl24) /* 1920px */",
    },
    fontSize: {
      "2xs": "var(--spacing-2xs) /* 12px */",
      "1.5xs": "var(--spacing-1_5xs) /* 14px */",
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      md: "var(--text-md)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      xxl: "var(--text-xxl)",
      tmd: "var(--title-md)",
      tlg: "var(--title-lg)",
      txl: "var(--title-xl)",
    },
    extend: {
      colors: {
        primary: toRgba("--primary"),
        secondary: toRgba("--secondary"),
        tertiary: toRgba("--tertiary"),
        quaternary: toRgba("--quaternary"),
        warning: toRgba("-warning"),

        active: toRgba("-active"),
        hover: toRgba("--hover"),
        click: toRgba("--click"),
        focus: toRgba("--focus"),
        icon: toRgba("--icon"),
        light: toRgba("--bg-light"),
        outline: toRgba("--outline"),
        divider: toRgba("--divider"),
        disabled: toRgba("--text-disabled"),
        await: toRgba("--bg-disabled"),
      },
      backgroundColor: {
        dark: toRgba("--bg-dark"),
        disabled: toRgba("--bg-disabled"),
        error: toRgba("--bg-error"),
        notification: toRgba("--bg-notification"),
        night: toRgba("--bg-night"),
        Success: toRgba("--bg-success"),
        warning: toRgba("--bg-warning"),
        active: toRgba("--bg-active"),
      },
      textColor: {
        gray: {
          primary: toRgba("--text-primary"),
          secondary: toRgba("--text-secondary"),
          tertiary: toRgba("--text-tertiary"),
          placeholder: toRgba("--placeholder"),
        },
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        focus: "var(--shadow-focus)",
        outline: "var(--shadow-outline)",
        "button-focus": "var(--shadow-button-focus)",
      },
      blur: {
        default: "var(--blur)",
      },
      borderRadius: {
        none: "var(--border-radius-none)",
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xlg: "var(--border-radius-xlg)",
        xxlg: "var(--border-radius-xxlg)",
      },
      //código omitido
    },
  },
  plugins: [],
};
