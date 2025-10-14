import { colorScheme } from "../layout";
import Link from "next/link";

export default function AssignmentSidebar() {
  return (
    <div className="flex flex-col h-full text-center">
        <h2 className={`${colorScheme.secondary} p-2 text-xl`}>Assignments</h2>
        <div className={`${colorScheme.other} p-4 flex-1`}>
            <Link className="underline" href="./week-2">Week 2 Assignment</Link> <br />
            <Link className="underline" href="./week-3">Week 3 Assignment</Link> <br />
            <Link className="underline" href="./week-4">Week 4 Assignment</Link> <br />
            <Link className="underline" href="./week-5">Week 5 Assignment</Link>
        </div>  
    </div>
  );
}