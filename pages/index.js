import {
  Grid,
  Flex,
  Text,
  Stack,
  useColorMode,
  Box,
  Button,
  Square,
  ButtonGroup,
  Input,
  Icon,
  Image,
  IconButton,
  ScaleFade,
  InputGroup,
  useColorModeValue,
  InputLeftElement,
  Container,
  Circle,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BiWallet, BiGasPump } from "react-icons/bi";
import { SiPolymerproject } from "react-icons/si";
import { CgDarkMode } from "react-icons/cg";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Logo } from '@components/ui/common';
import { useRouter } from "next/router";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <Box
      ml={{ base: "4px", md: "15%" }}
      mr={{ base: "4px", md: "15%" }}
      width={["full", "full", "auto"]}
    >
      <Box pos="relative">
        <IconButton
          position="fixed"
          bottom="5px"
          right="5px"
          aria-label="dark mode"
          boxSize={10}
          onClick={toggleColorMode}
          icon={<CgDarkMode />}
        />
        <Flex
          flexDirection={{ base: "row", md: "row" }}
          width="100%"
          py={4}
          px={{ base: "5px", md: null }}
          justifyContent="space-between"
          wrap="wrap"
          bgGradient={{
            base: isOpen ? "linear(to-l, #7072CD,   #7928CA)" : null,
            md: null,
          }}
        >
          <Flex align="center" mr={5} width={{ base: "auto", md: "50%" }}>
            <Heading
              as="h4"
              bgClip="text"
              size="lg"
              letterSpacing={"tighter"}
              bgGradient="linear(to-l, #FF0080, #7928CA)"
            >
              {/* <Image
                //  boxSize="10px"
                // objectFit="cover"
                src="logo.png"
                alt=""
              /> */}
           <Logo />
            </Heading>
          </Flex>
          <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
            <HamburgerIcon color={{ base: isOpen ? "white" : null }} />
          </Box>

          <Stack
            cursor="pointer"
            direction={{ base: "column", md: "row" }}
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "30%" }}
            alignItems="center"
            flexGrow={1}
            justifyContent={{ base: "start", md: "end" }}
            mt={{ base: 4, md: 0 }}
            color={{ base: isOpen ? "white" : null, md: null }}
          >
            {/* <Text>About</Text>
            <Text>Service</Text>
            <Text>Product</Text>
            <Text>Contact</Text> */}
            <Flex alignItems="center" justifyContent="space-between">
              {/* <Text mr={2} onClick={() => router.push('/login')}>Login</Text> */}
              <Button
                borderRadius="20px"
                size="md"
                color={{ base: "black", md: "white" }}
                bg={{ base: "white", md: " #7928CA" }}
              >
                Connect
              </Button>
            </Flex>
          </Stack>
        </Flex>

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={{ base: "80vh", md: "70vh" }}
        >
          <Flex
            alignItems="baseline"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box p={{ base: "12px", md: null }} textAlign="center">
              <Heading
                display="inline"
                bgClip="text"
                ml={1}
                fontSize={{ base: "2xl", md: "4xl" }}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                fontWeight="extrabold"
              >
                ₿ Pension
              </Heading>
              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="extrabold"
              >
                Decentralized way of managing pension on
                <Heading
                  display="inline"
                  bgClip="text"
                  ml={1}
                  fontSize={{ base: "4xl", md: "6xl" }}
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  fontWeight="extrabold"
                >
                  Blockchain
                </Heading>
              </Heading>

              <Flex color="#74788D" fontWeight="light">
                <Text
                  fontSize={{ base: "xl", md: "large" }}
                  width={{ base: "full", md: "100%" }}
                >
                  Defi Pension a means to create and manage pension for remote
                  workers. Individuals can contribute to the pension fund and
                  get their pension.
                </Text>
              </Flex>

              <ButtonGroup spacing="6" my={5} size="md">
                <Button borderRadius="20px" color="white" bg=" #7928CA">
               Company
                </Button>
                <Button borderRadius="20px" variant="outline">
              Personal
                </Button>
              </ButtonGroup>
            </Box>
          </Flex>
          {/* <Flex
            perspective="100px"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                display={{ base: "none", md: "flex" }}
              
              >
                <Box 
                  transform="rotateX(45deg)"
                  transformStyle="preserve-3d"
                
                >
                  <Circle size="200px" bg="#01048A11" pos="relative">
                    <img
                      src="laptop.png"
                      pos="absolute"
                      left="20%"
                      style={{
                        position: "absolute",
                        left: "20%",
                      }}
                    />
                  </Circle>
                </Box>
              </Flex> */}
        </Box>
        <Flex
          alignItems="center"
          mb={{ base: "5", md: "10" }}
          justifyContent="center"
        >
          <Heading
            fontSize={{ base: "x-large", md: "xx-large" }}
            fontWeight="extrabold"
            mr={2}
          >
            What you
          </Heading>
          <Heading
            bgClip="text"
            fontSize={{ base: "x-large", md: "xx-large" }}
            fontWeight="extrabold"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          >
            can do ?
          </Heading>
        </Flex>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
          mb={3}
        >
          <Flex
            alignItems={{ base: "center", md: "start" }}
            justifyContent="center"
            w="100%"
            h="200px"
            flexDirection="column"
            boxShadow="md"
            p={5}
          >
            <svg>
              <linearGradient
                id="blue-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#7928CA" offset="0%" />
                <stop stopColor="#FF0080" offset="100%" />
              </linearGradient>
            </svg>
            <Icon
              mb={3}
              as={MdOutlineHealthAndSafety}
              w={20}
              h={20}
              style={{ fill: "url(#blue-gradient)" }}
            />

            <Text fontWeight="bold" fontSize="md">
              Safe {"&"} Secured
            </Text>

            <Text
              fontSize="smaller"
              color="#74788D"
              textAlign={{ base: "center", md: "start" }}
            >
              Access Compound directly from the security of your Ledger hardware
              wallet.
            </Text>
          </Flex>
          <Flex
            alignItems={{ base: "center", md: "start" }}
            justifyContent="center"
            w="100%"
            h="200px"
            flexDirection="column"
            boxShadow="md"
            p={5}
          >
            <Icon
              mb={3}
              as={BiWallet}
              w={20}
              h={20}
              style={{ fill: "url(#blue-gradient)" }}
            />

            <Text fontWeight="bold" fontSize="md">
              Wallet Platform
            </Text>

            <Text
              fontSize="smaller"
              color="#74788D"
              textAlign={{ base: "center", md: "start" }}
            >
              Balance security and accessibility with BitGo{"’"}s hot, warm, and
              cold wallet solutions.
            </Text>
          </Flex>
          <Flex
            alignItems={{ base: "center", md: "start" }}
            justifyContent="center"
            w="100%"
            h="200px"
            flexDirection="column"
            boxShadow="md"
            p={5}
          >
            <Icon
              mb={3}
              as={FaFileContract}
              w={20}
              h={20}
              style={{ fill: "url(#blue-gradient)" }}
            />

            <Text fontWeight="bold" fontSize="md">
              Settlement
            </Text>

            <Text
              fontSize="smaller"
              color="#74788D"
              textAlign={{ base: "center", md: "start" }}
            >
              A more efficient and secure way to settle digital assets.
            </Text>
          </Flex>
          <Flex
            alignItems={{ base: "center", md: "start" }}
            justifyContent="center"
            w="100%"
            h="200px"
            flexDirection="column"
            boxShadow="md"
            p={5}
          >
            <Icon
              mb={3}
              as={SiPolymerproject}
              w={20}
              h={20}
              style={{ fill: "url(#blue-gradient)" }}
              transform=" rotate(90deg)"
            />

            <Text fontWeight="bold" fontSize="md">
              Polygon
            </Text>

            <Text
              fontSize="smaller"
              color="#74788D"
              textAlign={{ base: "center", md: "start" }}
            >
              Few gas fee required for transcation.
            </Text>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}
