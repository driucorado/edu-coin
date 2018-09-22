pragma solidity 0.4.24;

contract BasicCourse {
  address private wallet;
  int8 private reserve;

  constructor(
       address _wallet,
       int8 _reserve
   ) public {
     require(_reserve > 0);
     require(_wallet != address(0));
    reserve = _reserve;
    wallet = _wallet;
   }




}
