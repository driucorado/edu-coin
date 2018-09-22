pragma solidity 0.4.24;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/PausableToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol';

contract EduCoin is MintableToken, PausableToken, DetailedERC20 {
    constructor(string _name, string _symbol, uint8 _decimals)
      DetailedERC20(_name, _symbol, _decimals)
      public {

      }
}
