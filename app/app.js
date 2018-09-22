Web3 = require('web3')
fs = require('fs')

defEduCoin = JSON.parse(fs.readFileSync('./edu-ico/build/contracts/EduCoin.json', 'utf8'));
defEduCoinEmission = JSON.parse(fs.readFileSync('./edu-ico/build/contracts/EduCoinEmission.json', 'utf8'));
addressEduCoin = '0xd7d6b23425134a1e6d3cc6b8962cac75529ff7d3'
addressEduCoinEmission = '0x3e7cb11bc40e96bf4103202242f1500d7b7d917b'

if (typeof web3 !== 'undefined') {
 web3 = new Web3(web3.currentProvider);
} else {
 // set the provider you want from Web3.providers
 web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
console.log(web3.isConnected()); // 60

 web3.eth.defaultAccount = web3.eth.accounts[0];

if (web3.isConnected()) {
  var eduCoinContract = web3.eth.contract(defEduCoin.abi);
  eduCoinContract.at(addressEduCoin);
  console.log(eduCoinContract);

  var eduCoinEmissionContract = web3.eth.contract(defEduCoinEmission.abi);
  eduCoinEmissionContract.at(addressEduCoinEmission);
  console.log(addressEduCoinEmission);
}
