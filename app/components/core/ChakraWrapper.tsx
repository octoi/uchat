import { ChildrenProps } from '@/types/default.types';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default function ChakraWrapper({ children }: ChildrenProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
