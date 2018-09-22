pragma solidity 0.4.24;
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract EduCoinEmission is Crowdsale, MintedCrowdsale  {
    constructor
        (
            uint256 _rate,
            address _wallet,
            MintableToken _token
        )
        Crowdsale(_rate, _wallet, _token) public {

        }
}
