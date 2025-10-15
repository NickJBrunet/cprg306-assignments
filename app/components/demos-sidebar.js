/*

Author: Nick Brunet
Description: 
			A custom component to support styling of web page
			
Modified: 2025-10-14

*/

import { colorScheme } from "../layout";
import Link from "next/link";

export default function DemoSidebar() {
return (
	<div className="flex flex-col h-full text-center">
		<h2 className={`${colorScheme.secondary} p-2 text-xl`}>Demos</h2>
		<div className={`${colorScheme.other} p-4 flex-1`}>
			<Link className="underline" href="./demo-1">Demo #1</Link>
		</div>  
	</div>
);
}