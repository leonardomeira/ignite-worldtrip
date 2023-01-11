import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
    href: string;
    bg: string;
    heading: string;
    text: string;
}

export function Slide({ href, bg, heading, text }: SlideProps ) {
    return (
        <Link href={href}>
            <a>
                <Flex
                    as="div"
                    maxW="1240px"
                    h={["250px", "250px", "450px"]}
                    bgImage={`url(home/carousel/${bg}.png)`}
                    direction="column"
                    gap="12px"
                    align="center"
                    justify="center"
                >
                    <Heading as="h1" fontSize={[24, 30, 48]} fontWeight="700">
                        {heading}
                    </Heading>
                    <Text as="p" fontSize={[12, 16, 24]} fontWeight="700">
                        {text}
                    </Text>
                </Flex>
            </a>
        </Link>
    )
}