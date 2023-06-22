import { Box, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import WrapContent from './components/WrapContent';
import CallToAction from './components/CallToAction';

import SectionTwo from './assets/section2.jpg';
import SectionThree from './assets/section3.jpg';
import SectionOne from './assets/section1.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <WrapContent>
          <Box textAlign={'center'} px='8' py='40px' w='80%' m='auto'>
            <Divider w='30%' border='2px' m='auto' my='10' />
            <Text fontSize={'xl'}>
              Welcome to Equality Builders NFT, an innovative initiative by
              AEXCELite that harnesses the power of Non-Fungible Tokens (NFTs)
              for social good. Our mission is to achieve financial inclusion in
              Africa and South America, bridging the gap and ensuring that no
              region is left behind in the age of digital transformation.
            </Text>
            <Divider w='30%' border='2px' m='auto' my='10' />
          </Box>
          <Stack spacing='5'>
            <Section>
              <Stack>
                <Heading as='h2'>What is Equality Builders?</Heading>
                <Text fontSize='xl'>
                  Equality Builders is a groundbreaking NFT project that
                  combines the potential of blockchain technology with the
                  passion for social impact. By minting and selling NFTs, we
                  generate funds to support various programs and initiatives
                  designed to foster economic growth, education, and sustainable
                  development in underserved regions.
                </Text>
              </Stack>
              <Box>
                <Image src={SectionOne} />
              </Box>
            </Section>
            <Section>
              <Box display={['none', 'none', 'block']}>
                <Image src={SectionTwo} />
              </Box>
              <Stack>
                <Heading as='h2'>Driving Financial Inclusion</Heading>
                <Text fontSize='xl'>
                  At Equality Builders, we believe that financial inclusion is a
                  catalyst for change. By leveraging NFTs, we empower
                  individuals and communities by providing access to financial
                  tools, digital marketplaces, and educational programs. Our aim
                  is to unlock new opportunities and empower individuals to take
                  control of their financial futures.
                </Text>
              </Stack>
              <Box display={['block', 'block', 'none']}>
                <Image src={SectionTwo} />
              </Box>
            </Section>
            <Section>
              <Stack>
                <Heading as='h2'>Creating a Ripple Effect</Heading>
                <Text fontSize='xl'>
                  Our commitment goes beyond financial inclusion. Equality
                  Builders embraces artists and creators, promoting their work
                  on a global scale. We are dedicated to environmental
                  sustainability by incorporating eco-friendly blockchain
                  solutions. Additionally, we foster philanthropic partnerships
                  to amplify our impact and extend our reach.
                </Text>
              </Stack>
              <Box>
                <Image src={SectionThree} />
              </Box>
            </Section>
          </Stack>
          <CallToAction />
        </WrapContent>
      </main>
      <Footer />
    </>
  );
}

export default App;
