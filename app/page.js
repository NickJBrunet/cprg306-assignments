import Link from "next/link";

export default function Page() {
  let a = 10;
  let b = 20;
  return (
    //Main is required for other elements
    <main className="text-center text-2xl">
      <h1>Web Dev 2 Demos</h1>
      <p>
        Sum of {a} and {b} is {a + b}
      </p>
      {/* NOT RECOMMENDED TO USE 'A' TAG, USE NEXT.JS TAGS WHEN APPLICABLE */}
      <Link href="week-2">Click to go to week 2</Link>
    </main>
  );
}
