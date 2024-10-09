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
