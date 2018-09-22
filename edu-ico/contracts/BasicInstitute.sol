pragma solidity 0.4.24;

contract BasicInstitute {
  string name;
  mapping(address => uint8) internal courses;

  constructor(
       string _name
   ) public {
      name = _name;
   }
}
