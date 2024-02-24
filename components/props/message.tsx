import User from "./user";

export default function Message() {
  const data = "zeeshan";
  return (
    <div>
      <User student={data} />
    </div>
  );
}
