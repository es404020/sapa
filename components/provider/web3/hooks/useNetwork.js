import { useEffect } from "react";
import useSWR from "swr";

const NETWORK ={
    1:"Ethereum Main Network",
    3:"Ropsten Test Network",
    4:"Rinkeby Test Network",
    5:"Goerli Test Network",
    42:"Kovan Test Network",
    56:"Binance Smart Chain",
    1337:"Ganache"
}

const targetNetwork = NETWORK[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID]

export const handler = (web3, provider) => () => {
  const {data,error,mutate ,...rest} = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const netid = await web3.eth.getChainId();

      return NETWORK[netid]??'Unknown Network'; 
    }
  );

  useEffect(() => { 
      provider && provider.on("chainChanged",chainId=>mutate(NETWORK[parseInt(chainId,16)]??'Unknown Network'))
     
  }, [web3])

  return {
    network: {
        data,
        mutate,
        error,
        isLoading:!data && !error,
        target:targetNetwork,
        isSupported:data === targetNetwork,

      ...rest,
    },
  };
};
