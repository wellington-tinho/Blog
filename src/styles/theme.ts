import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: 'red.500',
          fontSize: 'sm',
          fontWeight: 'bold',
          lineHeight: 'normal',
        },
      },
    },
  },
  colors: {
    primary: '#002db3',
    secondary: '#001f7d',
    tertiary: '#3c00b3',
    ciano: '#00b3b3',
    green: '#007d7d',
  },
};

const theme = extendTheme(customTheme);

export default theme;
