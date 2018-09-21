pragma solidity 0.4.24;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract EduCoin is MintableToken {
    string public name = "eduCoin";
    string public symbol = "EC";
    uint8 public decimals = 0;
}
