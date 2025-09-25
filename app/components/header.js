import { colorScheme } from "../layout";
import Link from "next/link";
// Required {} around import value because it's a named export.

export default function Header() {
  return (
    <main className={`${colorScheme.main} p-4 shadow-md text-center flex justify-between`}>
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/" className="underline">Home Page</Link>
    </main>
  );
}
