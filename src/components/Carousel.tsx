import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper"
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Carousel() {
    return (
        <Box as="div" color="text.light">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={true}
                rewind={true}
            >
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <Box
                                as="div"
                                maxW="1240px"
                                h="450px"
                                bg="url(home/carousel/europe.png)"
                                display="flex"
                                flexDir="column"
                                gap="12px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text as="h1" fontSize={48} fontWeight="700">
                                    Europa
                                </Text>
                                <Text as="p" fontSize={24} fontWeight="700">
                                    O continente mais antigo.
                                </Text>
                            </Box>
                        </a>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                <Link href="#">
                    <a>
                        <Box
                            as="div"
                            maxW="1240px"
                            h="450px"
                            bg="url(home/carousel/asia.png)"
                            display="flex"
                            flexDir="column"
                            gap="12px"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text as="h1" fontSize={48} fontWeight="700">
                                Ásia
                            </Text>
                            <Text as="p" fontSize={24} fontWeight="700">
                                Civilizações milenares.
                            </Text>
                        </Box>
                    </a>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href="#">
                    <a>
                        <Box
                            as="div"
                            maxW="1240px"
                            h="450px"
                            bg="url(home/carousel/africa.png)"
                            display="flex"
                            flexDir="column"
                            gap="12px"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text as="h1" fontSize={48} fontWeight="700">
                                África
                            </Text>
                            <Text as="p" fontSize={24} fontWeight="700">
                                Onde a humanidade surgiu.
                            </Text>
                        </Box>
                    </a>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href="#">
                    <a>
                        <Box
                            as="div"
                            maxW="1240px"
                            h="450px"
                            bg="url(home/carousel/oceania.png)"
                            display="flex"
                            flexDir="column"
                            gap="12px"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text as="h1" fontSize={48} fontWeight="700">
                                Oceania
                            </Text>
                            <Text as="p" fontSize={24} fontWeight="700">
                                O menor continente.
                            </Text>
                        </Box>
                    </a>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href="#">
                    <a>
                        <Box
                            as="div"
                            maxW="1240px"
                            h="450px"
                            bg="url(home/carousel/northamerica.png)"
                            display="flex"
                            flexDir="column"
                            gap="12px"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text as="h1" fontSize={48} fontWeight="700">
                                América do Norte
                            </Text>
                            <Text as="p" fontSize={24} fontWeight="700">
                                A parte setentrional do novo mundo.
                            </Text>
                        </Box>
                    </a>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href="#">
                    <a>
                        <Box
                            as="div"
                            maxW="1240px"
                            h="450px"
                            bg="url(home/carousel/southamerica.png)"
                            display="flex"
                            flexDir="column"
                            gap="12px"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text as="h1" fontSize={48} fontWeight="700">
                                América do Sul
                            </Text>
                            <Text as="p" fontSize={24} fontWeight="700">
                                O continente mais diverso.
                            </Text>
                        </Box>
                    </a>
                </Link>
                </SwiperSlide>
            </Swiper>
        </Box>
        
    )
}