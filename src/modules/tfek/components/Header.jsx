
import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';



const Header = () => {
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
            top='0'
            zIndex='tooltip'
            justify='space-between'
            align='center'
            w='100%'
        >
            <Flex w="100%" paddingTop={5} justify="center">
                <h1>TFEK</h1>
            </Flex>
        </HStack>
    );
};

export default Header;
