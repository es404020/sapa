import React from 'react';

import { BaseLayout } from "@components/ui/layout";
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

export default function Home() {
    return (
        <Flex flexDirection="column" p={4} >
            <Flex flexDirection="row" height="80%" justifyContent="space-between">
            <Flex
            boxShadow="dark-lg"
                flexDirection="row"
                borderRadius="md"
                my={2}
                alignItems="center"
                justifyContent="space-between"
                p={3}
               
                width="30%"
              
              
            >
                <Avatar size="sm" name="0X4568" src="" />
                <Flex flexDirection="column" alignItems="center">
                    <Text fontSize="sm">0X4568...067f</Text>
                    <Text fontSize="sm" fontWeight="bold">
                        Ethe-Mainet
                    </Text>
                </Flex>
            </Flex>

            <Flex flexDirection="column">
                <Text fontSize="sm" fontWeight="md">Total Amount</Text>
                <Text fontWeight="extrabold" fontSize="xx-large">$6,000,000</Text>

            </Flex>
            </Flex>
           

        </Flex>
    )
}


Home.Layout = BaseLayout;