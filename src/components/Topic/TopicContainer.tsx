import { Grid, GridItem } from "@chakra-ui/react";
import { Topic } from ".";

export function TopicContainer() {
    return (
        <Grid
            w="100%"
            templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr", "repeat(5, 1fr)"]}
            justifyContent="space-between"
            alignItems="center"
            mt={["10","10", "32"]}
            mx="auto"
            maxW="1160px"
            gap={[1, 5]}
        >
            <GridItem>
                <Topic icon="cocktail" text="vida noturna"/>
            </GridItem>
            <GridItem>
                <Topic icon="surf" text="praia"/>
            </GridItem>
            <GridItem>
                <Topic icon="building" text="moderno"/>
            </GridItem>
            <GridItem>
                <Topic icon="museum" text="clássico"/>
            </GridItem>
            <GridItem colSpan={[2,2,2,1]}>
                <Topic icon="earth" text="e mais..."/>
            </GridItem>

        </Grid>
    );
}