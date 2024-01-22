import ColorPicker from "@components/ColorPicker";
import Counter from "@components/Counter";
import DisplayFormData from "@components/DisplayFormData";
import DisplayText from "@components/DisplayText";

export default function Home() {
  return (
    <main className="">
      <div className="text-center">
        <h1 className="text-4xl text-indigo-600">Home Page</h1>
        <Counter />
        <DisplayText />
        <DisplayFormData />
        <ColorPicker />
      </div>
    </main>
  );
}
