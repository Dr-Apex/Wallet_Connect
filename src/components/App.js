import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Card } from "semantic-ui-react";

export default function App() {
  const [account, setAccount] = useState("");

  async function loadBlockChain() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
    const network = await web3.eth.net.getNetworkType();
    console.log(network); // should give you main if you're connected to the main network via metamask...
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  }

  useEffect(() => loadBlockChain(), []);

  return (
    <Card fluid color='red'>
      <Card.Content textAlign='center'>
        <h3>Check out the the console</h3>
        <p>Your account: {account}</p>
      </Card.Content>
    </Card>
  );
}