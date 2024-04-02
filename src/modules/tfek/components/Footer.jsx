
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
                    <Image src="/tfek/images/download_play_store.png" alt='télécharger dans le play store' w={"15rem"} />
                </Box>
                <Box>
                    <Image src="/tfek/images/download_app_store.png" alt="télécharger dans l'app store" w={"15rem"} />
                </Box>
            </Flex>
        </HStack>
    );
};

export default Footer;
