import React from 'react';
import { Image,Box,Flex,Text } from '@chakra-ui/react'

export default function NavBox({image,text}) {
    return (

        <Flex  w="70%" alignItems="center" >




            <Image display="inline" src={image} boxSize={5} alt={text} mr={5} />
            <Text display="inline"  alignSelf="center" fontWeight="semibold"  fontSize="md">{text}</Text>

        </Flex>
        
    )
}
