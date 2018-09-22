import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import defEduCoin from './build/contracts/EduCoin.json'
import defEduCoinEmission from './build/contracts/EduCoinEmission.json'
import { connect } from 'react-redux'
import {getWeb3, getDefaultAccountAddress, getNetwork} from './utils'

const addressEduCoin = '0xc8cc36dd30a06c72b19cf3a9afd097497859c701'
const addressEduCoinEmission = '0xfc40a542ebcb28e843eadef810d77d304ed73835'

class App extends Component {
  constructor(props) {
    super(props);
    let tokenAddress = '';
    const accountAddress = getDefaultAccountAddress();


    getWeb3(true);
    getNetwork();
    const eduCoinContract = window.web3.eth.contract(defEduCoin.abi);
    const eduCoinContractInstance = eduCoinContract.at(addressEduCoin);

    const eduCoinEmissionContract = window.web3.eth.contract(defEduCoinEmission.abi);
    const eduCoinEmissionInstance = eduCoinEmissionContract.at(addressEduCoinEmission);
    window.eduCoinContract = eduCoinContractInstance;
    window.eduCoinEmission = eduCoinEmissionInstance;
    this.state = {isConnected: false, account: accountAddress, totalSupply: window.eduCoinContract.totalSupply()};
  }

  componentWillMount() {
    if(window.web3 && window.web3.isConnected()) {
      this.setState({isConnected: true});
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isConnected &&
          <div className="alert alert-primary" role="alert">
            Is connected to blockChain {this.state.network} total: {this.state.totalSupply.toString(10)}
          </div>
        }
        <div>Profile</div>
      </div>
    );
  }
}

export default App;
