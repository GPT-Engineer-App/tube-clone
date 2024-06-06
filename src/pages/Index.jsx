import { Box, Container, Flex, HStack, IconButton, Image, Input, VStack, Text, Avatar, Grid } from "@chakra-ui/react";
import { FaHome, FaFire, FaRegClock, FaHistory, FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        position="fixed"
        top="0"
        width="100%"
        bg="white"
        boxShadow="md"
        zIndex="1000"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack spacing={4}>
          <IconButton icon={<FaBars />} aria-label="Menu" />
          <Image src="/logo.png" alt="Logo" boxSize="40px" />
        </HStack>
        <Input placeholder="Search" maxW="600px" />
        <HStack spacing={4}>
          <Avatar name="User" src="/avatar.png" />
        </HStack>
      </Flex>

      {/* Sidebar */}
      <Box
        as="aside"
        position="fixed"
        top="60px"
        left="0"
        width="200px"
        height="100%"
        bg="gray.100"
        p={4}
        display={{ base: "none", md: "block" }}
      >
        <VStack align="start" spacing={4}>
          <HStack>
            <FaHome />
            <Text>Home</Text>
          </HStack>
          <HStack>
            <FaFire />
            <Text>Trending</Text>
          </HStack>
          <HStack>
            <FaRegClock />
            <Text>Subscriptions</Text>
          </HStack>
          <HStack>
            <FaHistory />
            <Text>History</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.xl" pt="60px" pl={{ base: "0", md: "200px" }}>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} p={4}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={`https://via.placeholder.com/250?text=Video+${index + 1}`} alt={`Video ${index + 1}`} />
              <Box p={4}>
                <Text fontWeight="bold">Video Title {index + 1}</Text>
                <Text>Channel Name</Text>
                <Text>1M views</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.200" p={4} textAlign="center">
        <Text>Footer Links</Text>
      </Box>
    </Box>
  );
};

export default Index;