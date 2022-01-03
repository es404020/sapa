import { useState, useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
    "0xb5aa2575df12f0474f6f7e4722a0da93e2b0a571133b30a4d0aae1e7e04ef9a9":true
}
export const handler = (web3, provider) => () => { 
  const { data, mutate, ...rest } = useSWR(
    () => {
      return web3 ? "web3/accounts" : null;
    },
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => {
        mutate(accounts[0] ?? null);
      });
  }, [provider]);

  return {
    account: {
        data,
        isAdmin:(data && adminAddresses[web3.utils.keccak256(data)])??false,
      mutate,
      ...rest,
    },
  };
};
