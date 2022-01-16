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



export default function index({toggle}) {
    return (
       <Flex p={3} width="100%" alignItems="center" height="10%" justifyContent="space-between" boxShadow="md" >
            <Text>Block</Text>
            {toggle}
       </Flex>
    )
}
