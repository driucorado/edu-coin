pragma solidity 0.4.24;

import 'zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';

contract EduCoinEmission is MintedCrowdsale {
    function EduCoinEmission
        (
            uint256 _rate,
            address _wallet,
            MintableToken _token
        )
        public Crowdsale(_rate, _wallet, _token) {
            
        }
}
