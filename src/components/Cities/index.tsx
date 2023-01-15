import { Heading, Grid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function Cities() {
    return (
        <>
            <Heading
                fontWeight="500"
                fontSize={["2xl", "4xl"]}
                mb="10"
            >
                Cidades +100
            </Heading>

            <Grid
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={["20px", "45px"]}
                alignItems="center"
                justifyContent="center"
                px={["30px", "0"]}
            >
                <CityCard
                    city="Londres"
                    cityImg="london"
                    country="Reino Unido"
                    countryImg="uk"
                />
                <CityCard
                    city="Paris"
                    cityImg="paris"
                    country="França"
                    countryImg="france"
                />
                <CityCard
                    city="Roma"
                    cityImg="rome"
                    country="Itália"
                    countryImg="italy"
                />
                <CityCard
                    city="Praga"
                    cityImg="prague"
                    country="Tchéquia"
                    countryImg="czechia"
                />
                <CityCard
                    city="Amsterdã"
                    cityImg="amsterdam"
                    country="Países Baixos"
                    countryImg="netherlands"
                />
            </Grid>
        </>
    );
}