/*

Author: Nick Brunet
Description: Week 2 assignment page
Modified: 2024-09-25

*/

import Header from '../components/header';
import StudentInfo from './student-info';

export default function Page() {
  return (
    // Main container
    <div className="text-center">
      {/* Header component across all pages */}
      <Header />
      <h1>Student Information:</h1>
      {/* Assignment specific component for showcasing student information */}
      <StudentInfo />
    </div>
  );
}
