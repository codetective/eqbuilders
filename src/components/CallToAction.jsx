import { chakra, Flex, Image, SimpleGrid } from '@chakra-ui/react';
import JoinUsSection from '../assets/join-us-section.jpg';

function CallToAction() {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}
      py='10'
    >
      <Flex bg='brand.400' display={['none', 'none', 'flex']}>
        <Image
          src={JoinUsSection}
          alt='join us'
          fit='cover'
          w='full'
          h={{
            base: 64,
            md: '85%',
          }}
          bg='gray.100'
          loading='lazy'
          opacity={0.4}
        />
      </Flex>
      <Flex
        direction='column'
        alignItems='start'
        justifyContent='center'
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        py={[10, 10, 24]}
        zIndex={3}
      >
        <chakra.span
          color='brand.600'
          _dark={{
            color: 'gray.300',
          }}
          fontSize='lg'
          textTransform='uppercase'
          fontWeight='extrabold'
        >
          We&apos;re here to help!
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{
            base: '4xl',
            md: '4xl',
            lg: '5xl',
          }}
          fontWeight='bold'
          color='brand.600'
          _dark={{
            color: 'gray.300',
          }}
          lineHeight='shorter'
          textShadow='2px 0 currentcolor'
        >
          Join us today!
        </chakra.h1>
        <chakra.p
          mb={4}
          fontSize='xl'
          color='brand.600'
          _dark={{
            color: 'gray.400',
          }}
          letterSpacing='wider'
        >
          Join us on this transformative journey towards a more equitable and
          prosperous future. Explore our collection of unique NFTs, where every
          purchase directly contributes to our mission of financial inclusion,
          empowerment, and social impact. Together, we can make a difference and
          ensure that Africa and South America thrive in the age of digital
          empowerment.
        </chakra.p>
      </Flex>
    </SimpleGrid>
  );
}

export default CallToAction;
