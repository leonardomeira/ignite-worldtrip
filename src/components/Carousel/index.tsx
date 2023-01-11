import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { Slide } from './Slide';

export default function Carousel() {

    SwiperCore.use([Autoplay]);

    return (
        <Box as="div" color="gray.100">
            <Swiper
                modules={[Navigation, Pagination]}
                autoplay={{delay: 4000}}
                navigation={true}
                pagination={true}
                rewind={true}
            >
                <SwiperSlide>
                    <Slide href="/europe" bg="europe" heading="Europa" text="O continente mais antigo."/>
                </SwiperSlide>

                <SwiperSlide>
                    <Slide href="/asia" bg="asia" heading="Ásia" text="Civilizações milenares."/>
                </SwiperSlide>

                <SwiperSlide>
                    <Slide href="/africa" bg="africa" heading="África" text="Onde a humanidade surgiu."/>
                </SwiperSlide>

                <SwiperSlide>
                    <Slide href="/oceania" bg="oceania" heading="Oceania" text="O menor continente."/>
                </SwiperSlide>

                <SwiperSlide>
                    <Slide href="/northamerica" bg="northamerica" heading="América do Norte" text="A parte setentrional do novo mundo."/>
                </SwiperSlide>

                <SwiperSlide>
                    <Slide href="/southamerica" bg="southamerica" heading="América do Sul" text="O continente mais diverso."/>
                </SwiperSlide>
            </Swiper>
        </Box>
        
    )
}