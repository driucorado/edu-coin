pragma solidity 0.4.24;

contract Course {
  uint8 private value;
  uint8 private spent;
  string name;
  uint private createAt;
  bool private enable;
  mapping(address => uint8) public students;

  constructor(
       uint8 _value,
       string _name
   ) public {
     require(_value > 0);
      value = _value;
      name = _name;
      spent = 0;
      createAt = now;
      enable = false;
   }

   function enrollStudent(address student) public returns (bool) {
     require(student != address(0));
     students[student] = 1;
     return true;
   }

   function unrollStudent(address student) public returns (bool) {
     require(student != address(0));
     students[student] = 0;
     return true;
   }

   function isActive() public returns (bool) {
     return enable;
     return true;
   }

   function active() public {
     enable = true;
   }

   function disable() public {
     enable = false;
   }


}
