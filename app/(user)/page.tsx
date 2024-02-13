import TodoList from "@components/TodoList";
import ShoppingCart from "@components/ShoppingCart";

export default function Home() {
  return (
    <main className="">
      <div>
        <TodoList />
        <ShoppingCart />
      </div>
    </main>
  );
}
