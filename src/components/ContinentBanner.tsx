import { Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex
            w="100%"
            h={["150px", "300px", "500px"]}
            px={["0", "0", "36"]}
            pt={["0", "0", "72"]}
            bgImage="url(/continent/banner/eubanner.png)"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            align="center"
            justify={["center", "center", "flex-start"]}
        >
            <Heading
                textAlign={["center", "left"]}
                fontSize={["1.75rem", "5xl"]}
                color="gray.100"
                fontWeight="600"
            >
                Europa
            </Heading>
        </Flex>
    );
}