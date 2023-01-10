import { Flex, Grid, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex
            as="header"
            bg="white"
            w="100vw"
            h={["50px", "100px"]}
            align="center"
            justify="center"
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                alignItems="center"
                justifyContent="center"
                templateColumns="repeat(3, 1fr)"
            >
                <Image
                    w={["81px", "184px"]}
                    src="/logo.svg"
                    alt="Logo Wordltrip"
                    justifySelf="center"
                    gridColumn={2}
                />

            </Grid>
        </Flex>
    )
}