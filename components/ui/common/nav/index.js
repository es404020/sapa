import React from "react";
import {
  Flex,
  Text,
  Image,
  Spacer,
  useColorModeValue,
  WrapItem,
  InputRightElement,
  Heading,
  Progress,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  Select,
  Table,
  Circle,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  Square,
  position,
  Center,
} from "@chakra-ui/react";
import { Logo } from "@components/ui/common";
import NavBox from "./NavBox";

export default function index() {
  const menuList = [
    {
      image: "home.svg",
      text: "Dashboard",
    },
    {
      image: "chart.svg",
      text: "Analytics",
    },
    {
      image: "exchange.svg",
      text: "Transfer",
    },
    {
      image: "contact.svg",
      text: "Staff",
    },
    {
      image: "billing.svg",
      text: "History",
    },
  ];
  return (
    <Flex
      flexDir="column"
      p={5}
      alignItems="start"
      position="fixed"
      overflow="hidden"
      width="15%"
      height="100%"
      left="0"
      bottom="0"
      top="0"
      boxShadow="md"
    >
      <Logo />

      <Flex
        flexDirection="row"
        borderRadius="md"
        my={2}
        alignItems="center"
        justifyContent="space-between"
        p={3}
        height="10%"
        width="100%"
        boxShadow="md"
        border="1px solid gray"
      >
        <Avatar size="sm" name="0X4568" src="" />
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize="sm">0X4568...067f</Text>
          <Text fontSize="sm" fontWeight="bold">
            Ethe-Mainet
          </Text>
        </Flex>
      </Flex>

      <Flex
        height="60%"
        width="100%"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="start"
      >
        {menuList.map((item, i) => {
          return <NavBox key={i} image={item.image} text={item.text} />;
        })}

        {/* <NavBox image="chart.svg" text="Chart" />

<NavBox image="wallet.svg" text="Cypto Wallet" />
<NavBox image="contact.svg" text="Contact" />
<NavBox image="exchange.svg" text="Currency" />
<NavBox image="billing.svg" text="Billing" /> */}
      </Flex>

      <Flex
        mt="auto"
        width="100%"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="start"
      >
        <NavBox image="settings.svg" text="Settings" />
      </Flex>
    </Flex>
  );
}
