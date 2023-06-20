import { Box, Flex, Text } from '@chakra-ui/react';
import Logo from './Logo';
import WrapContent from './WrapContent';

function Header() {
  return (
    <Box bgColor='white' shadow={'sm'}>
      <WrapContent>
        <Flex justifyContent={'space-between'} py='5'>
          <Logo />
          <Text>Equality Builders</Text>
        </Flex>
      </WrapContent>
    </Box>
  );
}

export default Header;
