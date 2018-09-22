pragma solidity 0.4.24;

import './Holder.sol';

contract BadgeEmission {
  mapping(address => mapping(address => uint8)) public badges;

  event AssignBadge(address holder);

  /*
  assignBadge
  Assign Badget
   */
  function assignBadge(address badgeId,address holder) public returns (bool) {
    require(holder != address(0));
    require(badgeId != address(0));
    badges[holder][badgeId] = 1;
    emit AssignBadge(holder);
  }
}
