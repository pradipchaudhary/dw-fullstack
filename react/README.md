# React Learn

# Props

### Understanding `props` in React

In React, **props** (short for **properties**) are the mechanism used to pass data from one component to another, typically from a **parent** to a **child** component. Props make components more dynamic and reusable by allowing them to receive different data each time they are used.

### Key Concepts of `props`:

1. **Unidirectional Data Flow**:

    - In React, data flows in **one direction**: from parent to child components. This is called a "unidirectional data flow" or "one-way data binding."
    - Parent components pass down props, while child components cannot modify them.

2. **Props are Read-Only**:

    - **Props are immutable**—once passed to a child component, they cannot be changed by that component. If the data needs to change, it should happen in the parent component, which can pass updated props down.

3. **Passing Data via Attributes**:

    - Props are passed to components like HTML attributes. For example:
        ```jsx
        <Component propName={value} />
        ```

4. **Accessing Props in a Component**:
    - Inside a component, props are accessed via the `props` object. For functional components, they are passed as an argument to the function, while in class components, they are accessed via `this.props`.

---

### Example 1: Basic Use of Props

```jsx
// Parent component
import React from "react";
import User from "./User";

function App() {
    const userName = "John Doe";
    const userAge = 30;

    return (
        <div>
            <User name={userName} age={userAge} />
        </div>
    );
}

export default App;
```

```jsx
// Child component
import React from "react";

function User(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
        </div>
    );
}

export default User;
```

In this example:

-   The `App` component passes the `userName` and `userAge` as props to the `User` component.
-   The `User` component displays the passed values using `props.name` and `props.age`.

---

### Example 2: Destructuring Props

To make the code cleaner, you can destructure the props object, which is a common practice in React development.

```jsx
function User({ name, age }) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
        </div>
    );
}
```

Here, the `name` and `age` props are destructured directly in the function signature, making the code shorter and more readable.

---

### Example 3: Passing Functions as Props

Props can also pass functions to child components, enabling child components to communicate or trigger actions in the parent component.

```jsx
// Parent Component
import React from "react";
import Button from "./Button";

function App() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div>
            <Button onClick={handleClick} />
        </div>
    );
}

export default App;
```

```jsx
// Child Component
import React from "react";

function Button({ onClick }) {
    return <button onClick={onClick}>Click Me!</button>;
}

export default Button;
```

In this example:

-   The `App` component passes the `handleClick` function as a prop to the `Button` component.
-   The `Button` component invokes this function when clicked, triggering the parent component’s alert.

---

### Props vs. State

-   **Props** are used to pass data **into** a component and are **immutable** inside the component.
-   **State** is used to handle data **within** a component and is **mutable** within the component.

In summary, props are essential in React to create dynamic and reusable components by allowing them to receive varying data from their parent. Since props are immutable, they ensure that components remain predictable, making it easier to reason about how data flows in the application.

# Conditional Rendering

### Conditional Rendering in React

**Conditional rendering** in React refers to the process of rendering different UI elements or components based on certain conditions, similar to how conditionals work in JavaScript. Instead of manually updating the DOM, React will re-render components when their state or props change, making the app dynamic and interactive.

### Common Ways to Perform Conditional Rendering in React

1. **Using `if-else` Statements**
2. **Using Ternary Operators**
3. **Using Logical `&&` Operator**
4. **Using `switch` Statements**
5. **Conditional Rendering with Functions**

---

### 1. **Using `if-else` Statements**

The traditional `if-else` statement can be used to conditionally render components, but it’s often placed inside the component’s `render` method or the main function body (for functional components).

#### Example:

```jsx
function App() {
    const isLoggedIn = true;

    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please log in</h1>;
    }
}

export default App;
```

-   If `isLoggedIn` is `true`, the message "Welcome back!" will be rendered.
-   If `isLoggedIn` is `false`, the message "Please log in" will be rendered.

---

### 2. **Using Ternary Operator**

A **ternary operator** is often used for inline conditional rendering and is more concise than `if-else`. It's a good option when you want to choose between two different UI elements.

#### Syntax:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

#### Example:

```jsx
function App() {
    const isLoggedIn = false;

    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
        </div>
    );
}

export default App;
```

-   If `isLoggedIn` is `true`, it renders "Welcome back!".
-   If `isLoggedIn` is `false`, it renders "Please log in".

---

### 3. **Using Logical `&&` Operator**

The **logical `&&` (AND)** operator is useful when you want to conditionally render something only if a condition is true, and not show anything otherwise.

#### Example:

```jsx
function App() {
    const hasNotifications = true;

    return (
        <div>
            <h1>Hello, User</h1>
            {hasNotifications && <p>You have new notifications!</p>}
        </div>
    );
}

export default App;
```

-   If `hasNotifications` is `true`, it renders the `<p>` element.
-   If `hasNotifications` is `false`, nothing is rendered.

> Note: The `&&` operator does not provide an "else" case. If the condition is `false`, it returns `null` (renders nothing).

---

### 4. **Using `switch` Statements**

For handling multiple conditions, a **`switch` statement** can be useful when there are more than two possible outcomes. It keeps the code organized, especially when rendering several different components based on multiple conditions.

#### Example:

```jsx
function App() {
    const status = "loading"; // Other values: "success", "error"

    switch (status) {
        case "loading":
            return <h1>Loading...</h1>;
        case "success":
            return <h1>Data fetched successfully!</h1>;
        case "error":
            return <h1>Error occurred while fetching data.</h1>;
        default:
            return <h1>Unknown status</h1>;
    }
}

export default App;
```

-   Based on the value of `status`, the corresponding UI will be rendered.

---

### 5. **Conditional Rendering with Functions**

Sometimes it's cleaner to use a function to handle conditional rendering. This is especially useful when the logic is more complex, and we don't want to clutter the main component's JSX.

#### Example:

```jsx
function App() {
    const isLoggedIn = true;

    function renderMessage() {
        if (isLoggedIn) {
            return <h1>Welcome back!</h1>;
        } else {
            return <h1>Please log in</h1>;
        }
    }

    return <div>{renderMessage()}</div>;
}

export default App;
```

-   The `renderMessage` function handles the condition and returns the appropriate UI based on the state.

---

### Best Practices for Conditional Rendering:

-   **Keep it Simple**: Use ternary operators or `&&` when rendering simple elements. If the logic gets too complex, consider breaking it out into a separate function or using multiple `if-else` statements.
-   **Avoid Cluttering JSX**: Overuse of conditionals directly inside JSX can make the component harder to read. In such cases, it's better to move the logic into helper functions.
-   **Don’t Forget Fallbacks**: If using a `switch` statement, always include a `default` case to handle unexpected values.

### Summary

Conditional rendering allows React components to adapt dynamically based on different states or data. Whether using `if-else`, ternary operators, or logical operators like `&&`, React makes it easy to show different content depending on conditions, resulting in more interactive and responsive user interfaces.

# Hooks

React hooks are a feature introduced in React 16.8 that allow you to use state and other React features in functional components (instead of class components). They make your code more readable and maintainable. Here’s a beginner-friendly explanation of the most commonly used hooks:

### 1. **useState Hook**

`useState` allows you to add state to a functional component. State is a way to store and update data that changes over time.

#### Syntax:

```javascript
const [state, setState] = useState(initialValue);
```

-   `state`: The current value of the state.
-   `setState`: A function to update the state.
-   `initialValue`: The initial value of the state.

#### Example:

```javascript
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // Initial state is 0

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
```

In this example:

-   `count` stores the current value (initially `0`).
-   `setCount` updates the `count`.
-   Clicking the button increases the count by 1.

### 2. **useEffect Hook**

`useEffect` lets you run side effects (like data fetching, subscribing to events, or manipulating the DOM) after the component renders.

#### Syntax:

```javascript
useEffect(() => {
    // Your side effect code
}, [dependencies]);
```

-   The first argument is a function containing the side effect.
-   The second argument is an optional array of dependencies. The effect will re-run when one of the dependencies changes. If the array is empty, the effect runs only once when the component mounts.

#### Example:

```javascript
import { useState, useEffect } from "react";

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((result) => setData(result));
    }, []); // Runs once after the component mounts

    return (
        <div>
            <p>Data: {data ? JSON.stringify(data) : "Loading..."}</p>
        </div>
    );
}
```

In this example:

-   `useEffect` fetches data when the component mounts.
-   The empty dependency array `[]` ensures that the effect runs only once.

### 3. **useContext Hook**

`useContext` allows you to access values from a React Context, which is a way to pass data through the component tree without having to pass props manually at every level.

#### Syntax:

```javascript
const value = useContext(MyContext);
```

#### Example:

```javascript
import { useContext } from "react";

const ThemeContext = React.createContext("light");

function ThemeButton() {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme === "light" ? "#fff" : "#333" }}>
            I am styled by theme!
        </button>
    );
}
```

In this example:

-   `ThemeButton` uses the `ThemeContext` to get the current theme value (either 'light' or 'dark').

### 4. **useRef Hook**

`useRef` provides a way to persist values across renders without causing the component to re-render. It can also be used to directly access DOM elements.

#### Syntax:

```javascript
const ref = useRef(initialValue);
```

#### Example:

```javascript
import { useRef } from "react";

function InputFocus() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus(); // Directly access the input element and focus it
    };

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    );
}
```

In this example:

-   `inputRef` is a reference to the input element, allowing us to focus it programmatically.

### 5. **useReducer Hook**

`useReducer` is an alternative to `useState` for managing more complex state logic, such as multiple sub-values or when the next state depends on the previous one.

#### Syntax:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

-   `reducer`: A function that takes the current state and an action and returns the new state.
-   `dispatch`: A function to send actions to the reducer to update the state.

#### Example:

```javascript
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}
```

In this example:

-   `useReducer` is used to manage the `count` state, with `dispatch` sending actions to the `reducer` to update the state.

---

Beyond the basic hooks (`useState`, `useEffect`, `useContext`, `useRef`, `useReducer`), React provides a few more hooks that are useful for specific scenarios. Let’s dive into some additional hooks for more advanced use cases.

### 6. **useMemo Hook**

`useMemo` is used to optimize performance by memoizing expensive calculations. It will only recompute the memoized value when one of the dependencies changes, preventing unnecessary recalculations on every render.

#### Syntax:

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

-   `computeExpensiveValue`: A function that performs the expensive calculation.
-   `[a, b]`: Dependencies that trigger recomputation when they change.

#### Example:

```javascript
import { useMemo, useState } from "react";

function ExpensiveCalculation({ num }) {
    const expensiveResult = useMemo(() => {
        console.log("Calculating...");
        return num * 2; // Simulated expensive calculation
    }, [num]);

    return <div>Expensive Calculation Result: {expensiveResult}</div>;
}
```

In this example:

-   `useMemo` ensures that the expensive calculation (`num * 2`) only runs when `num` changes, avoiding recalculations during unnecessary renders.

### 7. **useCallback Hook**

`useCallback` is used to memoize a callback function. This is useful when passing a function as a prop to child components to prevent unnecessary re-renders, especially when the child component is optimized with `React.memo`.

#### Syntax:

```javascript
const memoizedCallback = useCallback(() => {
    // Your callback logic
}, [dependencies]);
```

#### Example:

```javascript
import { useState, useCallback } from "react";

function Child({ onClick }) {
    return <button onClick={onClick}>Click me</button>;
}

function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]); // Memoized function depends on `count`

    return (
        <div>
            <p>Count: {count}</p>
            <Child onClick={handleClick} />
        </div>
    );
}
```

In this example:

-   `useCallback` memoizes the `handleClick` function, ensuring that it doesn’t get redefined unless `count` changes, thus preventing unnecessary re-renders of the `Child` component.

### 8. **useLayoutEffect Hook**

`useLayoutEffect` is similar to `useEffect`, but it runs synchronously after all DOM mutations. This hook is used for operations that need to read or modify the DOM right after a render, such as measuring the layout. It runs before the browser paints the screen, unlike `useEffect` which runs after.

#### Syntax:

```javascript
useLayoutEffect(() => {
    // DOM read/write operations
}, [dependencies]);
```

#### Example:

```javascript
import { useLayoutEffect, useRef, useState } from "react";

function LayoutEffectExample() {
    const boxRef = useRef(null);
    const [boxWidth, setBoxWidth] = useState(0);

    useLayoutEffect(() => {
        if (boxRef.current) {
            setBoxWidth(boxRef.current.offsetWidth);
        }
    }, []);

    return (
        <div>
            <div
                ref={boxRef}
                style={{ width: "100%", background: "lightblue" }}
            >
                This box is {boxWidth}px wide
            </div>
        </div>
    );
}
```

In this example:

-   `useLayoutEffect` measures the width of a DOM element (`boxRef`) right after it renders, allowing the app to display the element's width.

### 9. **useImperativeHandle Hook**

`useImperativeHandle` allows you to customize the ref values that are exposed when using `ref` in a parent component. It’s usually used with `forwardRef` to control what values a parent can access.

#### Syntax:

```javascript
useImperativeHandle(
    ref,
    () => {
        // Expose specific methods or properties to the parent
    },
    [dependencies]
);
```

#### Example:

```javascript
import React, { useRef, useImperativeHandle, forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = "";
        },
    }));

    return <input ref={inputRef} />;
});

function ParentComponent() {
    const inputRef = useRef();

    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
            <button onClick={() => inputRef.current.clear()}>Clear</button>
        </div>
    );
}
```

In this example:

-   `useImperativeHandle` allows the parent to control the `CustomInput` by exposing `focus` and `clear` methods.

### 10. **useDebugValue Hook**

`useDebugValue` is used to display a label in React DevTools for custom hooks. This helps during debugging, but it doesn’t affect the actual behavior of the hook.

#### Syntax:

```javascript
useDebugValue(value);
```

#### Example:

```javascript
function useCustomHook(value) {
    useDebugValue(value > 0 ? "Positive" : "Negative");
    return value * 2;
}

function Component() {
    const value = useCustomHook(5);
    return <div>{value}</div>;
}
```

In this example:

-   `useDebugValue` helps in debugging by showing "Positive" or "Negative" based on the value in React DevTools.

### 11. **useId Hook**

`useId` is a hook introduced in React 18 that generates unique IDs for elements in your components. This is useful for associating elements like `<label>` and `<input>` without manual ID management.

#### Syntax:

```javascript
const id = useId();
```

#### Example:

```javascript
import { useId } from "react";

function InputWithLabel() {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>Username:</label>
            <input id={id} type="text" />
        </div>
    );
}
```

In this example:

-   `useId` generates a unique ID that is shared between the `<label>` and `<input>` elements to ensure accessibility.

### 12. **useTransition Hook**

`useTransition` is a hook introduced in React 18 that helps manage transitions between different states. It allows you to mark some state updates as non-urgent, so you can handle performance-heavy updates in the background without blocking the UI.

#### Syntax:

```javascript
const [isPending, startTransition] = useTransition();
```

#### Example:

```javascript
import { useState, useTransition } from "react";

function TransitionExample() {
    const [text, setText] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        startTransition(() => {
            setText(e.target.value);
        });
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{isPending ? "Loading..." : text}</p>
        </div>
    );
}
```

In this example:

-   `useTransition` allows you to update the `text` in the background without blocking the UI, improving the user experience.

---

These additional hooks (`useMemo`, `useCallback`, `useLayoutEffect`, etc.) are powerful tools for optimizing performance and handling advanced use cases in your React applications. While some may be used less frequently than others, understanding how and when to use them is crucial as your applications grow in complexity.
