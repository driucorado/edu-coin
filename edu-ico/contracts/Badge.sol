pragma solidity 0.4.24;


contract Badge {
  uint8 private identifier;
  string public name;
  address public holder;
  constructor(
       uint8 _identifier,
       string _name,
       address _holder
   ) public {
     identifier = _identifier;
     name = _name;
     holder = _holder;
   }
}
