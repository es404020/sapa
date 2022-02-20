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

  import { useWeb3 } from "@components/provider";
  import { useAccount } from "@components/hooks/web3";

export default function index({toggle}) {

  const { connect, isWeb3Loaded, isLoading } = useWeb3();


  const { account } = useAccount();
    return (
       <Flex p={3} width="100%" alignItems="center" height="10%" justifyContent="space-between" boxShadow="md" >
            <Text>Block</Text>
            <Flex alignItems="center"  >

            {isLoading ? (
                <Button  mr={10}>loading .....</Button>
              ) : isWeb3Loaded ? account.data? (
                <Button   mr={10} className="cursor-default">Hi there {account.isAdmin && "Admin"}</Button>
              ): (
                <Button onClick={connect}

                borderRadius="20px"
                size="sm"
                color={{ base: "black", md: "white" }}
                bg={{ base: "white", md: " #7928CA" }}
                mr={10}
                
                >Connect</Button>
              ) 
              
              
              : (
                <Button
                mr={10}
                  onClick={() => {
                    window.open("https://metamask.io/download", "_blank");
                  }}
                >
                  Install Metamask
                </Button>
              )}
              
         
            {toggle}
            </Flex>
          
       </Flex>
    )
}
