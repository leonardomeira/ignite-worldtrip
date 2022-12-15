import { Box, Divider, Img, Text } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

export default function Home () {
  return (
    <>
      <Header />

      <Box
        as="main"
      >
        <Box
          w="100vw"
          h={335}
          as="section"
          display="flex"
          justifyContent="space-between"
          px={140}
          py={75}
          background="url('home/stars-background.png')"
          position="relative"
        >
          <Box
            as="div"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            color="text.light"

          >
            <Text
              as="h1"
              fontSize={38}
              fontWeight="500"
            >
              5 Continentes,<br />infinitas possibilidades.
            </Text>

            <Text
              as="p"
              fontSize={20}
              fontWeight="400"
            >
              Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
            </Text>
          </Box>

          <Img
            src="home/airplane.png"
            position="absolute"
            left="65%"
          />
        </Box>

        <Box
          as="section"
          mt="114px"
          maxW={1160}
          display="flex"
          justifyContent="space-between"
          marginInline="auto"
          color="text.dark"
        >
          <Box
            as="div"
            h={145}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <Img src="home/cocktail.svg"/>
            <Text
              as="span"
              mt="24px"
              fontSize={24}
              fontWeight={600}
            >
              vida noturna
            </Text>
          </Box>

          <Box
            as="div"
            h={145}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <Img src="home/surf.svg"/>
            <Text
              as="span"
              mt="24px"
              fontSize={24}
              fontWeight={600}
            >
              praia
            </Text>
          </Box>

          <Box
            as="div"
            h={145}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <Img src="home/building.svg"/>
            <Text
              as="span"
              mt="24px"
              fontSize={24}
              fontWeight={600}
            >
              moderno
            </Text>
          </Box>

          <Box
            as="div"
            h={145}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <Img src="home/museum.svg"/>
            <Text
              as="span"
              mt="24px"
              fontSize={24}
              fontWeight={600}
            >
              clássico
            </Text>
          </Box>

          <Box
            as="div"
            h={145}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <Img src="home/earth.svg"/>
            <Text
              as="span"
              mt="24px"
              fontSize={24}
              fontWeight={600}
            >
              e mais...
            </Text>
          </Box>

        </Box>

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
