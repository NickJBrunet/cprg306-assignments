/*

Author: Nick Brunet
Description: 
			A custom component to support styling of web page
			
Modified: 2025-10-14

*/

import { colorScheme } from "./colorScheme.js";
import Link from "next/link";
// Required {} around import value because it's non-default export.

export default function Header() {
return (
	<main className={`${colorScheme.main} p-4 shadow-md text-center flex justify-between`}>
		<h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
		<Link href="/" className="underline">Home Page</Link>
	</main>
);
}
