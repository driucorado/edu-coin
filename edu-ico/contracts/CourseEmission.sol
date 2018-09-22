pragma solidity 0.4.24;

import './BasicCourse.sol';

contract CourseEmission {

     mapping(string => address) activeCourses;
     mapping(string => address) allCourses;

     event CreateCourse(address course);
     event CloseCourse(address course);


}
