import { Box, Center, chakra, Image } from '@chakra-ui/react';
import logoImage from '../assets/logo.png';
import bg from '../assets/bg.jpeg';

function Hero() {
  return (
    <Box
      pos='relative'
      overflow='hidden'
      bg='white'
      bgImage={`url(${bg})`}
      bgSize={'cover'}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
      bgColor={'whiteAlpha.700'}
      bgBlendMode={'overlay'}
    >
      <Box maxW='7xl' mx='auto'>
        <Box pos='relative' w='full' border='solid 1px transparent'>
          <Box
            maxW={{
              base: '7xl',
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}
          >
            <Box
              textAlign='center'
              w={{
                base: 'full',
                md: 11 / 12,
                xl: 8 / 12,
              }}
              mx='auto'
            >
              <chakra.h1
                fontSize={{
                  base: '4xl',
                  sm: '5xl',
                  md: '6xl',
                }}
                letterSpacing='tight'
                lineHeight='short'
                color='gray.900'
                _dark={{
                  color: 'white',
                }}
              >
                <chakra.span fontWeight={'semibold'} color='gray.900'>
                  Introducing sound impact through NFTs:
                </chakra.span>
                <chakra.span fontWeight={'bold'} color='gray.900'>
                  {' '}
                  Equality Builders
                </chakra.span>
              </chakra.h1>
              <Center py='10'>
                <Image w='90%' src={logoImage} />
              </Center>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                mx={{
                  sm: 'auto',
                  lg: 0,
                }}
                mb={6}
                fontSize={{
                  base: 'lg',
                  md: 'xl',
                }}
                color='gray.900'
                lineHeight='base'
              >
                Empowering Africa and South America through financial inclusion
              </chakra.p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
