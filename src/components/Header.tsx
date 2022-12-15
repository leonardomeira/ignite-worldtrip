import { Box, Img } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box
            as="header"
            w="100vw"
            h={100}
            display="flex"
            alignContent="center"
            justifyContent="center"
        >
            <Img src="/logo.svg" w={184} />
        </Box>
    )
}