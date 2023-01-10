import { Box, Divider, Image, Text, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { Topic } from "../components/Topic";
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
          my="80px"
          borderWidth="1px"
          w="90px"
          marginInline="auto"
          borderColor="text.dark"
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
          <Text
            as="h1"
            color="text.dark"
            textAlign="center"
            fontSize={36}
            fontWeight="500"
          >
            Vamos nessa? <br /> Então escolha seu continente
          </Text>

          <Carousel />
        </Box>

      </Box>
      
    </>
  )
}
