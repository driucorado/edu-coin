pragma solidity 0.4.24;

contract BasicCourse {
  uint8 private value;
  uint8 private spent;
  string private name;
  uint private createAt;
  bool public isActive;

  constructor(
       uint8 _value,
       string _name
   ) public {
     require(_value > 0);
      value = _value;
      name = _name;
      spent = 0;
      createAt = now;
      isActive = false;
   }

   function active() public {
     isActive = true;
   }

   function disable() public {
     isActive = false;
   }


}
