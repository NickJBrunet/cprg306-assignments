/*

Author: Nick Brunet
Description: Main page component for the CPRG 306 assignments application.
Modified: 2024-09-25

*/

import Header from "./components/header";
import AssignmentSidebar from "./components/assignment-sidebar";

export default function Page() {
  return (
    <main className="flex flex-col h-dvh w-screen">
      {/* Header component used on all pages */}
      <Header />
      {/* Main body container */}
      <div className="flex flex-row h-full">
        {/* Left sidebar */}
        <div className="w-1/2"></div>
        {/* Middle body container */}
        <div className="w-full text-center pt-2">
          <h1 className="text-2xl">Created By: Nicholas Brunet</h1>
          <p>Software development student at SAIT</p>
        </div>
        {/* Right sidebar */}
        <div className="w-1/2 h-full">
          <AssignmentSidebar />
          {/* AssignmentSidebar handles all link references */}
        </div>
      </div>
    </main>
  );
}
