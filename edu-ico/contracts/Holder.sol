pragma solidity 0.4.24;


contract Holder {
  uint8 private identifier;
  string private name;
  address private student;
  constructor(
       uint8 _identifier,
       string _name,
       address _student
   ) public {
     identifier = _identifier;
     name = _name;
     student = _student;
   }
}
