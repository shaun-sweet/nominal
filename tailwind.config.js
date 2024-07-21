/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "sans-serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#FFFFFF",
      /**
       * For now we manually map these to CSS variables. Maybe there’s better tooling.
       *
       */
      metal: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
        950: "#030712",
      },
      mint: {
        50: "#F0FDF4",
        100: "#DCFCE7",
        200: "#BBF7D0",
        300: "#86EFAC",
        400: "#4ADE80",
        500: "#22C55E",
        600: "#16A34A",
        700: "#15803D",
        800: "#065F46",
        900: "#064E3B",
        950: "#022C22",
      },
      berry: {
        50: "#FFF1F2",
        100: "#FFE4E6",
        200: "#FECDD3",
        300: "#FDA4AF",
        400: "#FB7185",
        500: "#F43F5E",
        600: "#E11D48",
        700: "#BE123C",
        800: "#9D1741",
        900: "#78163D",
        950: "#500724",
      },
      amber: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FCD34D",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: "#9A3412",
        900: "#7C2D12",
        950: "#431407",
      },
      sky: {
        50: "#ECFEFF",
        100: "#CFFAFE",
        200: "#A5F3FC",
        300: "#67E8F9",
        400: "#22D3EE",
        500: "#06B6D4",
        600: "#0891B2",
        700: "#0372A1",
        800: "#075985",
        900: "#0C4A6E",
        950: "#0C4A6E",
      },
      plum: {
        50: "#F5F3FF",
        100: "#EDE9FE",
        200: "#DDD6FE",
        300: "#C4B5FD",
        400: "#A78BFA",
        500: "#8B5CF6",
        600: "#7C3AED",
        700: "#7E22CE",
        800: "#6B21A8",
        900: "#581C87",
        950: "#4A044E",
      },
    },
    fontSize: {
      xs: [
        "0.6875rem", // 11px
        {
          lineHeight: "1rem", // 16px
        },
      ],
      sm: [
        "0.8125rem", // 13px
        {
          lineHeight: "1.25rem", // 20px
        },
      ],
      base: [
        "0.9375rem", // 15px
        {
          lineHeight: "1.375rem", // 22px
        },
      ],
      lg: [
        "1.0625rem", // 17px
        {
          lineHeight: "1.5rem", // 24px
        },
      ],
      xl: [
        "1.1875rem", // 19px
        {
          lineHeight: "1.6875rem", // 27px
        },
      ],
      "2xl": [
        "1.3125rem", // 21px
        {
          lineHeight: "1.875rem", // 30px
        },
      ],
    },
  },
  plugins: [],
};
