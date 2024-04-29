import { Box, Flex, Text, Image, Button, Input, VStack, HStack } from '@chakra-ui/react';
import { FaCalendarAlt, FaInfoCircle, FaImages, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center">
        <Text fontSize="5xl" fontWeight="bold" mb={5}>The Rock Legends</Text>
        <Image src="/images/band.jpg" alt="The Rock Legends Band" boxSize="500px" borderRadius="lg" mb={5} />

        <VStack spacing={4} align="stretch" w="100%">
          <Box bg="gray.200" p={4} borderRadius="lg">
            <HStack spacing={3}>
              <FaCalendarAlt size="24px" />
              <Text fontSize="2xl" fontWeight="bold">Tour Dates</Text>
            </HStack>
            <Text mt={2}>Check out our upcoming tour dates and locations!</Text>
            <Button mt={3} colorScheme="blue">View Dates</Button>
          </Box>

          <Box bg="gray.200" p={4} borderRadius="lg">
            <HStack spacing={3}>
              <FaInfoCircle size="24px" />
              <Text fontSize="2xl" fontWeight="bold">Band Biography</Text>
            </HStack>
            <Text mt={2}>Learn more about the history and members of The Rock Legends.</Text>
            <Button mt={3} colorScheme="blue">Read More</Button>
          </Box>

          <Box bg="gray.200" p={4} borderRadius="lg">
            <HStack spacing={3}>
              <FaImages size="24px" />
              <Text fontSize="2xl" fontWeight="bold">Photo Gallery</Text>
            </HStack>
            <Text mt={2}>Browse through our collection of band photos and live performance shots.</Text>
            <Button mt={3} colorScheme="blue">Explore Gallery</Button>
          </Box>

          <Box bg="gray.200" p={4} borderRadius="lg">
            <HStack spacing={3}>
              <FaEnvelope size="24px" />
              <Text fontSize="2xl" fontWeight="bold">Contact Us</Text>
            </HStack>
            <VStack spacing={2} mt={2}>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Message" />
              <Button mt={3} colorScheme="blue">Send Message</Button>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;