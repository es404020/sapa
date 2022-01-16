import React from 'react'
import { Web3Provider,useWeb3 } from "@components/provider"
import {Headers,NavBar} from '@components/ui/common'
import { CgDarkMode } from "react-icons/cg";
import { Image,Box,Flex,IconButton,  useColorMode, } from '@chakra-ui/react'
export default function BaseLayout( {children}) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Web3Provider>
            <NavBar />

            <Flex flexDirection="column"   height="100vh"  marginLeft="15%" top="0px">
            <Headers toggle={
 <IconButton

 aria-label="dark mode"
 boxSize={10}
 onClick={toggleColorMode}
 icon={<CgDarkMode />}
/>
            }/>
            {children}

           
            </Flex>
           
         
            </Web3Provider>
    )
}
