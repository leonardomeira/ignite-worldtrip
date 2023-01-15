import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {

    const { asPath } = useRouter();

    const notHomePage = asPath !== '/';

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
                {notHomePage && (
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start"/>
                        </a>
                    </Link>
                )}
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