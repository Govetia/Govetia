
import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";


const Footer = () => {
    const [width, setWindowWidth] = useState(0);
    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    const desktopView = width > 980;
    return (
        <HStack
            as='header'
            position='fixed'
            bottom='0'
            zIndex='tooltip'
            justify='space-between'
            align='center'
            w='100%'
        >
            <Flex w="100%" padding={5} justify={"space-between"}>
                <Box>
                    <p>Télécharger sur le Play store</p>
                    <FaGooglePlay />
                </Box>

                <Box>
                    <p>Télécharger sur l&apos;Apple store</p>
                    <IoLogoAppleAppstore />

                </Box>
            </Flex>
        </HStack>
    );
};

export default Footer;
