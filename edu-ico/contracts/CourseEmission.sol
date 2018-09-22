pragma solidity 0.4.24;

import './Course.sol';

contract CourseEmission {

     mapping(string => address) activeCourses;
     mapping(string => address) allCourses;

     event CreateCourse(address course);
     event CloseCourse(address course);

     function registerCourse(string name, address course) public {
        allCourses[name] = course;
     }
}
