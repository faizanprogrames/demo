1. **String Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const text = "Hello, World!";
  return <ChildComponent message={text} />;
}

// ChildComponent.tsx
interface ChildProps {
  message: string;
}

function ChildComponent(props: ChildProps) {
  return <div>{props.message}</div>;
}
```

2. **Number Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const numberValue = 42;
  return <ChildComponent value={numberValue} />;
}

// ChildComponent.tsx
interface ChildProps {
  value: number;
}

function ChildComponent(props: ChildProps) {
  return <div>{props.value}</div>;
}
```

3. **Boolean Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const isTrue = true;
  return <ChildComponent isActive={isTrue} />;
}

// ChildComponent.tsx
interface ChildProps {
  isActive: boolean;
}

function ChildComponent(props: ChildProps) {
  return <div>{props.isActive ? "Active" : "Inactive"}</div>;
}
```

4. **Array Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const items = ["Apple", "Banana", "Orange"];
  return <ChildComponent fruits={items} />;
}

// ChildComponent.tsx
interface ChildProps {
  fruits: string[];
}

function ChildComponent(props: ChildProps) {
  return (
    <ul>
      {props.fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

5. **Object Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const person = { name: "John", age: 25 };
  return <ChildComponent person={person} />;
}

// ChildComponent.tsx
interface Person {
  name: string;
  age: number;
}

interface ChildProps {
  person: Person;
}

function ChildComponent(props: ChildProps) {
  return (
    <div>
      <p>Name: {props.person.name}</p>
      <p>Age: {props.person.age}</p>
    </div>
  );
}
```

6. **Function Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <ChildComponent onClick={handleClick} />;
}

// ChildComponent.tsx
interface ChildProps {
  onClick: () => void;
}

function ChildComponent(props: ChildProps) {
  return <button onClick={props.onClick}>Click me</button>;
}
```

7. **Children Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return <ChildComponent>I am a child component!</ChildComponent>;
}

// ChildComponent.tsx
interface ChildProps {
  children: React.ReactNode;
}

function ChildComponent(props: ChildProps) {
  return <div>{props.children}</div>;
}
```

8. **Default Prop Value:**

```tsx
// ChildComponent.tsx
interface ChildProps {
  message: string;
}

function ChildComponent(props: ChildProps) {
  return <div>{props.message}</div>;
}

ChildComponent.defaultProps = {
  message: "Default Message",
};
```

9. **Union Type Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return <ChildComponent status="success" />;
}

// ChildComponent.tsx
type Status = "success" | "error" | "warning";

interface ChildProps {
  status: Status;
}

function ChildComponent(props: ChildProps) {
  return <div>Status: {props.status}</div>;
}
```

10. **Callback Prop:**

```tsx
// ParentComponent.tsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const handleCallback = (data: string) => {
    console.log("Callback received:", data);
  };

  return <ChildComponent callback={handleCallback} />;
}

// ChildComponent.tsx
interface ChildProps {
  callback: (data: string) => void;
}

function ChildComponent(props: ChildProps) {
  const sendData = () => {
    props.callback("Data from child component");
  };

  return (
    <div>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}
```
