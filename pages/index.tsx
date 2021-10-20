export default function Home() {
  async function test() {
    const result = await fetch("/api/test");
    const json = await result.json();
    console.log(json);
  }
  return (
    <div>
      hej
      <button onClick={test}>test</button>
    </div>
  );
}
