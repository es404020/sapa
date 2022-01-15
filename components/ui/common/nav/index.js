import React from 'react'
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
import { Logo } from '@components/ui/common';
import NavBox from './NavBox';


export default function index() {
    return (
        <Flex flexDir="column" p={5} alignItems="start"  position="fixed"  overflow="hidden" width="15%" height="100%" left="0" bottom="0" top="0">

<Logo />

<Flex mt={10} height="50%" width="100%" flexDirection="column" justifyContent="space-evenly" alignItems="start" >
<NavBox image="home.svg" text="Home" />
<NavBox image="chart.svg" text="Chart" />

<NavBox image="wallet.svg" text="Wallet" />
<NavBox image="contact.svg" text="Contact" />
<NavBox image="exchange.svg" text="Exchange" />
<NavBox image="billing.svg" text="Billing" />
</Flex>




<Flex mt="auto"  width="100%" flexDirection="column" justifyContent="space-evenly" alignItems="start" >
<NavBox image="settings.svg" text="Settings" />
</Flex>
        </Flex>
    )
}

