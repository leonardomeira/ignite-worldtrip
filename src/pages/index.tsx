import { Box, Divider, Image, Text, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TopicContainer } from "../components/Topic/TopicContainer";

export default function Home () {
  return (
    <>
      <Header />

      <Box
        as="main"
      >
        
        <Banner />

        <Flex
          maxW={1160}
          justifyContent="space-between"
          marginInline="auto"
          color="gray.700"
        >
          <TopicContainer />

        </Flex>

        <Divider
          my={["30px", "30px", "80px"]}
          borderWidth="1px"
          w="90px"
          marginInline="auto"
          borderColor="gray.700"
        />

        <Box
          as="section"
          maxW="1240px"
          marginInline="auto"
          display="flex"
          flexDir="column"
          gap="40px"
          mb="30px"
        >
          <Heading
            as="h1"
            color="text.dark"
            textAlign="center"
            fontSize={["1.25rem", "1.25rem", "1.5rem", 36]}
            fontWeight="500"
          >
            Vamos nessa? <br /> Então escolha seu continente
          </Heading>

          <Carousel />
        </Box>

      </Box>
      
    </>
  )
}
