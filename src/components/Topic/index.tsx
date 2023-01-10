import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TopicProps {
    icon: string;
    text: string;
};

export function Topic({ icon, text }: TopicProps) {

    const isMobile = useBreakpointValue({
        base: false,
        md: true
    })

    return (
        <Flex
            direction={['row', 'row', 'column']}
            align="center"
            justify="center"
        >
            {isMobile ? <Image src={`home/${icon}.svg`}/> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text> }
            <Text
                color="gry.700"
                fontSize={["md", "xl", "2xl"]}
                fontWeight={600}
            >
                {text}
            </Text>
        </Flex>
    );
}