/*

Author: Nick Brunet
Description: Week 2 assignment component to display student information.
Modified: 2024-09-25

*/

import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Nicholas Brunet</p>
      <Link className="underline" href="https://github.com/NickJBrunet/cprg306-assignments">https://github.com/NickJBrunet/cprg306-assignments</Link>
    </div>
  );
}