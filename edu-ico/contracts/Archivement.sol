pragma solidity 0.4.24;

contract Archivement {
  uint256 private identifier;
  string private name;
  constructor(
       uint256 _identifier,
       string _name
   ) public {
     identifier = _identifier;
     name = _name;
   }
}
