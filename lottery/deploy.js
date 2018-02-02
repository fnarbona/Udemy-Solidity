const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDwalletProvider(
  'stand lab worry obtain suit antenna load lyrics powder replace give guide',
  'https://rinkeby.infura.io/HskAjyeKcnLSV8fsPMfQ'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({gas: '1000000', from: accounts[0]});

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};

deploy();
