import {extendTheme} from '@chakra-ui/react'

const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: 'gray.500',
          fontSize: 'sm',
          fontWeight: 'bold',
          lineHeight: 'normal',
        }
      }
    }
  }
};

const theme = extendTheme(customTheme);

export default theme;