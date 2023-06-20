/* eslint-disable react/prop-types */
import { SimpleGrid } from '@chakra-ui/react';

function Section({ children }) {
  return (
    <SimpleGrid gap='10' columns={[1, 1, 2]} py='10'>
      {children}
    </SimpleGrid>
  );
}

export default Section;
