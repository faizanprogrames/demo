import Counter from "@components/Counter";
import DisplayText from "@components/DisplayText";

export default function Home() {
  return (
    <main className="">
      <div className="text-center">
        <h1 className="text-4xl text-indigo-600">Home Page</h1>
        <Counter />
        <DisplayText />
      </div>
    </main>
  );
}
