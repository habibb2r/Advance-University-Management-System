import { TAcademicSemesterCodes, TAcademicSemesterNameCodeMapper, TAcademicSemesterNames, TMonths } from "./academicSemester.interface";

export const months : TMonths[] = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];

  export const semesterNames: TAcademicSemesterNames[] = ['Autumn', 'Fall', 'Summer']
  export const semesterCodes: TAcademicSemesterCodes[] = ['01', '02','03']

 export const academicSemesterNameCodeMapper : TAcademicSemesterNameCodeMapper = {
    Autumn : '01',
    Summer : '02',
    Fall : '03'
}