module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: Object.assign(
        {},
        ...[...Array(9).keys()].map((i) => {
          return {
            [`primary-${(i + 1) * 100}`]: `var(--color-primary-${
              (i + 1) * 100
            })`,
          };
        }),
        ...[...Array(9).keys()].map((i) => {
          return {
            [`secondary-${(i + 1) * 100}`]: `var(--color-secondary-${
              (i + 1) * 100
            })`,
          };
        }),
        ...[...Array(9).keys()].map((i) => {
          return {
            [`accent-${(i + 1) * 100}`]: `var(--color-accent-${
              (i + 1) * 100
            })`,
          };
        })
      ),
    },
  },
  variants: {},
  plugins: [],
};
