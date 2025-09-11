import Title from "./title.js";

// marks the function as the default/main function
export default function Page() {
  return (
    //A parent tag is required for other elements
    <main>
      <h1>Week 2 Route Page</h1>
      <Title />
      <p>Welcome to week 2 page</p>
    </main>
  );
}
