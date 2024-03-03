async function getData() {
  const res = await fetch(
    "https://65e33db788c4088649f5861d.mockapi.io/products"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductWarehouse() {
  const data = await getData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Product Warehouse</h1>
      <form action="" className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          type="text"
          placeholder="Enter product name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter price name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border bg-indigo-600 text-white p-2 rounded-md">
          Add a Product
        </button>
      </form>
    </div>
  );
}
