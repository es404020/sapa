import React from "react";

import { BaseLayout } from "@components/ui/layout";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
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
import { useAccount,useNetwork } from "@components/hooks/web3";

export default function Home() {

  const { account } = useAccount();
  const {network} = useNetwork();
  return (
    <Flex flexDirection="column" p={4}>
      <Flex flexDirection="row" height="80%" justifyContent="space-between">
        <Flex
          boxShadow="dark-lg"
          flexDirection="row"
          borderRadius="md"
          my={2}
          alignItems="center"
          justifyContent="space-between"
          p={5}
          width="30%"
        >
          <Flex
            mr={5}
            alignItems="center"
            width="100%"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Avatar size="sm" name="0X4568" src="" />
            <Flex flexDirection="column" alignItems="center">
              <Text fontSize="sm">{account.data}</Text>
              

                {!network.isSupported && network.isLoading && (
           <Text fontSize="sm" fontWeight="bold">
           {network.target}
           </Text>
          )}
            
            </Flex>
          </Flex>

          <Flex
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <PhoneIcon />
            <PhoneIcon />
            <PhoneIcon />
          </Flex>
        </Flex>

        <Flex flexDirection="column" width="30%">
          <Text fontSize="sm" fontWeight="md">
            Total Amount
          </Text>

          <Flex
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Text fontWeight="extrabold" fontSize="xx-large">
              $6,000,000
            </Text>
            <PhoneIcon />
            <PhoneIcon />
            <PhoneIcon />
          </Flex>
        </Flex>
      </Flex>

      <Tabs mt={5}>
        <TabList>
          <Tab>Portfolio</Tab>
          <Tab>NFT</Tab>
          <Tab>History</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

Home.Layout = BaseLayout;
//illness wash goose pair soap usual plunge fat idea napkin remind material