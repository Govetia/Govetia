import { Flex, Link, Image, Box } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";


const Home = () => {
  return <Flex
    bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}
    p={50}
    w="full"
    h={"100vh"}
    alignItems="center"
    justifyContent="center"
  >
    <Box
      mx="auto"
      rounded="lg"
      shadow="lg"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      maxW="2xl"
    >
      <Image
        rounded="lg"
        fit="cover"
        display={{
          base: "none",
          sm: "block",
        }}
        src="/assets/tarawa.png"
        alt="avatar"
      />
      <Flex p={3} justifyContent="space-between" alignItems="center">
        <chakra.span
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          Mardi 26 avril 2024
        </chakra.span>
        <Link
          px={3}
          py={1}
          bg="gray.600"
          color="gray.100"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          _hover={{
            bg: "gray.500",
          }}
        >
          Par Louis Viogeat
        </Link>
      </Flex>

      <Box p={3}>
        <Link
          fontSize="2xl"
          color="gray.700"
          _dark={{
            color: "white",
          }}
          fontWeight="700"
          _hover={{
            color: "gray.600",
            _dark: {
              color: "gray.200",
            },
            textDecor: "underline",
          }}
        >
          Titre de l&apos;événement
        </Link>
        <chakra.p
          mt={2}
          color="gray.600"
          _dark={{
            color: "gray.300",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </chakra.p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Link
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
          _hover={{
            textDecor: "underline",
          }}
        >
          Read more
        </Link>

        <Flex alignItems="center">
          <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            display={{
              base: "none",
              sm: "block",
            }}
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <Link
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
            fontWeight="700"
            cursor="pointer"
          >
            Khatab wedaa
          </Link>
        </Flex>
      </Flex>
    </Box>
  </Flex>;
};

export default Home;