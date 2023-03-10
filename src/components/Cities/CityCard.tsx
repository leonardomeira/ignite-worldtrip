import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
    cityImg: string;
    countryImg: string;
    city: string;
    country: string;
};

export function CityCard({ cityImg, countryImg, city, country }: CityCardProps) {
    return (
        <Box
            borderRadius="4px"
            overflow="hidden"
            maxW={["100%", "256px"]}
        >
            <Image src={`/continent/cities/${cityImg}.png`} h="170px" w="100%"/>
            <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
            >
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">{city}</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{country}</Text>
                </Flex>
                <Image
                    src={`/continent/countries/${countryImg}.png`}
                    w="30px"
                    h="30px"
                />
            </Flex>
        </Box>
    );
}