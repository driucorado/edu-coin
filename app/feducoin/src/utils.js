import Web3 from 'web3';

export const getWeb3 = (connectLocal = false) => {
  if (connectLocal) {
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }
  if (typeof window.web3 !== 'undefined') {
    console.log('found web3')
    return window.web3;
  } else {
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }
  return window.web3;
}

export const getDefaultAccountAddress = () => {
  const web3 = window.web3;
  const purchaser = web3.eth.defaultAccount;
  return web3.eth.accounts[purchaser]
}

export const getNetwork = () => {
  window.web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet')
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      break
    case "4":
      console.log('This is the Rinkeby test network.')
      break
    case "42":
      console.log('This is the Kovan test network.')
      break
    default:
      console.log('This is an unknown network.')
  }
});
}
