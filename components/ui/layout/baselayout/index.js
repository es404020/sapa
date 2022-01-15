import React from 'react'
import { Web3Provider,useWeb3 } from "@components/provider"
import {Headers,NavBar} from '@components/ui/common'
import { Image,Box } from '@chakra-ui/react'
export default function BaseLayout( {children}) {
    console.log('hhe')
    return (
        <Web3Provider>
            <NavBar />

            <Box position="relative" bg="#f3f7ff" height="100vh"  marginLeft="15%" top="0px">
            {children}
            </Box>
           
         
            </Web3Provider>
    )
}
