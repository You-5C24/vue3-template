const MAP_SPACING = Array.from({
  length: 51
}).reduce((mapObj, item, index) => {
  mapObj[index] = `${index}px`;
  return mapObj;
}, {});

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        ...MAP_SPACING,
      },
      fontSize: {
        ...MAP_SPACING,
      },
      borderRadius: {
        ...MAP_SPACING,
        50: '50%'
      },
      borderWidth: {
        1: '1px'
      },
      lineHeight: {
        ...MAP_SPACING,
      }
    },
    textColor: theme => ({
      ...theme('colors'),
      'color-000': '#000000',
      'color-26': '#262626',
      'color-333': '#333333',
      'color-444': '#444444',
      'color-666': '#666666',
      'color-999': '#999999',
      'color-409ef': '#409EFF',
      'color-3878FF': '#3878FF',
      'color-DB7093': '#DB7093'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      F7F7F7: '#F7F7F7',
      EBEEF5: '#EBEEF5',
      F0F2F5: '#F0F2F5',
      D9D9D9: '#D9D9D9',
      FAFAFA: '#FAFAFA',
      FFF1F0: '#FFF1F0',
      FFCCC7: '#FFCCC7',
      ECF5FF: '#ECF5FF',
      E9E9E9: '#E9E9E9',
      DB7093: '#DB7093'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      E4E7ED: '#E4E7ED',
      D9D9D9: '#D9D9D9',
      FFCCC7: '#FFCCC7',
      C6E2FF: '#C6E2FF',
      E9E9E9: '#E9E9E9'
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
