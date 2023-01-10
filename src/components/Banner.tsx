import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box
          w="100vw"
          h={335}
          as="section"
          display="flex"
          justifyContent="space-between"
          background="url('home/stars-background.png')"
          position="relative"
        >
          <Flex
            justifyContent={["center","space-between"]}
            align="center"
            w="100%"
            mx="auto"
            px={["4","10","15","20","36"]}

          >
            <div>
                <Heading
                    as="h1"
                    color="gray.100"
                    fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
                    fontWeight="500"
                >
                5 Continentes,<br />infinitas possibilidades.
                </Heading>

                <Text
                    as="p"
                    color="gray.300"
                    fontSize={["0.8rem", "1rem", "1rem", "1rem", "xl"]}
                    mt="5"
                    maxW={["100%", "100%", "550px"]}
                    fontWeight="400"
                >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </div>

            <Image
                src="home/airplane.png"
                w={["300px", "300px", "300px", "430px"]}
                display={['none', 'none', 'block']}
                alt="Avião amarelo voando"
                transform={["none", "none", "none", "translateY(48px)"]}
                ml="8"
            />
            
          </Flex>

         
        </Box>
    )
}