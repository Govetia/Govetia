import { Flex, Text, Image, Box } from "@chakra-ui/react";


const Footer = () => {
  return <Flex w={"100%"} position={"fixed"} bottom={0}>
      <Flex justifyContent={"flex-start"} w={"100%"}>
        <Image src="/tarawa/assets/social-facebook.svg" m={1} boxSize="15px" fill={"black"} alt="facebook"></Image>
        <Image src="/tarawa/assets/social-instagram.svg" m={1} boxSize="15px" alt="instagram"></Image>
        <Image src="/tarawa/assets/social-tiktok.svg" m={1} boxSize="15px" alt="tiktok"></Image>
      </Flex>
    
  </Flex>;
};

export default Footer;
