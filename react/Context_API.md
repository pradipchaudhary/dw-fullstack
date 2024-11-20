# Context API in React

The Context API in React is a feature that allows you to share data across multiple components without passing props manually through every level of the component tree. It is particularly useful for managing global state in your application, such as user authentication, theme settings, or language preferences.

## Key Concepts of the Context API

### `React.createContext`

Creates a context object. This object provides two main components:

-   **Provider**: Supplies the data to components that need it.
-   **Consumer**: Retrieves the data supplied by the Provider.

### `Context.Provider`

Wraps around the components that need access to the context. It takes a `value` prop, which is the data you want to share.

### `useContext` Hook

Simplifies accessing the context in functional components. There is no need to use the Consumer component explicitly.

## Example: Using Context API for Theme Management

### 1. Create a Context

```js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
```

### 2. Wrap the Application

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
```

### 3. Consume the Context

```js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ToggleThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return <button onClick={toggleTheme}>Current Theme: {theme}</button>;
};

export default ToggleThemeButton;
```

## Advantages of Context API

-   Reduces prop drilling.
-   Native solution (no extra libraries required).
-   Works seamlessly with functional components using the `useContext` hook.

## When to Use Context API

-   Shared state needed across multiple, deeply nested components.
-   Situations like user authentication, themes, or language settings.

However, for larger applications with complex state management, tools like Redux, Zustand, or Recoil may offer more scalability and advanced features.

# React Context API Examples

## Example 1: User Authentication Context

This example manages user authentication status and user information globally.

### 1. Create the Authentication Context

```js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userInfo) => {
        setUser(userInfo);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
```

### 2. Wrap the Application

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./AuthContext";

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById("root")
);
```

### 3. Consume the Context

```js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const UserProfile = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <p>Please log in.</p>;
    }

    return (
        <div>
            <p>Welcome, {user.name}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserProfile;
```

### 4. Login Component

```js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login({ name: "John Doe", email: "john@example.com" });
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;
```

## Example 2: Theme Toggle with Multiple Components

This example uses a context to manage theme state globally and applies it across different components.

### 1. Theme Context

```js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
```

### 2. Consume in Components

```js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <h1 style={{ color: theme === "light" ? "#000" : "#fff" }}>Header</h1>
    );
};

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return <p style={{ color: theme === "light" ? "#000" : "#fff" }}>Footer</p>;
};

const ToggleButton = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return <button onClick={toggleTheme}>Toggle Theme</button>;
};

const App = () => {
    return (
        <div>
            <Header />
            <ToggleButton />
            <Footer />
        </div>
    );
};
```

### 3. Wrap the App

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
```

## Example 3: Shopping Cart Context

This example demonstrates managing a shopping cart with Context API.

### 1. Cart Context

```js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
```

### 2. Cart Components

```js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Products = () => {
    const { addToCart } = useContext(CartContext);

    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" },
    ];

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <span>{product.name}</span>
                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Products />
            <Cart />
        </div>
    );
};
```

### 3. Wrap the App

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./CartContext";

ReactDOM.render(
    <CartProvider>
        <App />
    </CartProvider>,
    document.getElementById("root")
);
```

## Example 4: Language/Localization Context

Manage the application's language settings and text translations using the Context API.

### 1. Create Language Context

```js
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
    en: { greeting: "Hello", farewell: "Goodbye" },
    es: { greeting: "Hola", farewell: "Adiós" },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider
            value={{ language, translations, switchLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
```

### 2. Consume Language Context

```js
import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Greeting = () => {
    const { language, translations } = useContext(LanguageContext);

    return <h1>{translations[language].greeting}</h1>;
};

const LanguageSwitcher = () => {
    const { switchLanguage } = useContext(LanguageContext);

    return (
        <div>
            <button onClick={() => switchLanguage("en")}>English</button>
            <button onClick={() => switchLanguage("es")}>Spanish</button>
        </div>
    );
};
```

### 3. Wrap Application

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LanguageProvider } from "./LanguageContext";

ReactDOM.render(
    <LanguageProvider>
        <App />
    </LanguageProvider>,
    document.getElementById("root")
);
```

---

## Example 5: Notification System Context

Manage notifications globally in the app.

### 1. Create Notification Context

```js
import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message) => {
        const id = new Date().getTime();
        setNotifications((prev) => [...prev, { id, message }]);
    };

    const removeNotification = (id) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id)
        );
    };

    return (
        <NotificationContext.Provider
            value={{ notifications, addNotification, removeNotification }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
```

### 2. Consume Notification Context

```js
import React, { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

const NotificationList = () => {
    const { notifications, removeNotification } =
        useContext(NotificationContext);

    return (
        <div>
            {notifications.map((notification) => (
                <div key={notification.id}>
                    <span>{notification.message}</span>
                    <button onClick={() => removeNotification(notification.id)}>
                        Dismiss
                    </button>
                </div>
            ))}
        </div>
    );
};

const AddNotification = () => {
    const { addNotification } = useContext(NotificationContext);

    const handleAdd = () => {
        addNotification("New Notification!");
    };

    return <button onClick={handleAdd}>Add Notification</button>;
};
```

### 3. Wrap Application

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NotificationProvider } from "./NotificationContext";

ReactDOM.render(
    <NotificationProvider>
        <App />
    </NotificationProvider>,
    document.getElementById("root")
);
```

---

## Example 6: Dark/Light Mode with Context

Use Context API to implement a toggle for dark and light themes.

### 1. Create Theme Context

```js
import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
```

### 2. Apply Context

```js
import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const Navbar = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div
            style={{
                background: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
            }}
        >
            <h1>Navbar</h1>
        </div>
    );
};

const DarkModeToggle = () => {
    const { toggleDarkMode } = useContext(DarkModeContext);

    return <button onClick={toggleDarkMode}>Toggle Dark Mode</button>;
};
```

### 3. Wrap Application

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeProvider } from "./DarkModeContext";

ReactDOM.render(
    <DarkModeProvider>
        <App />
    </DarkModeProvider>,
    document.getElementById("root")
);
```

---

## Example 7: Real-Time Chat Application Context

Use Context API to manage messages in a chat app.

### 1. Create Chat Context

```js
import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        const newMessage = { id: new Date().getTime(), text };
        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <ChatContext.Provider value={{ messages, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};
```

### 2. Chat Components

```js
import React, { useContext } from "react";
import { ChatContext } from "./ChatContext";

const ChatBox = () => {
    const { messages } = useContext(ChatContext);

    return (
        <div>
            {messages.map((message) => (
                <p key={message.id}>{message.text}</p>
            ))}
        </div>
    );
};

const SendMessage = () => {
    const { sendMessage } = useContext(ChatContext);

    const handleSend = () => {
        const text = prompt("Enter your message:");
        sendMessage(text);
    };

    return <button onClick={handleSend}>Send Message</button>;
};
```

### 3. Wrap Application

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChatProvider } from "./ChatContext";

ReactDOM.render(
    <ChatProvider>
        <App />
    </ChatProvider>,
    document.getElementById("root")
);
```

### **Example 8: Multi-Step Form Context**

Manage a multi-step form where each step's data is shared globally.

1. **Create Form Context**

```javascript
import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    const updateFormData = (stepData) => {
        setFormData((prev) => ({ ...prev, ...stepData }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};
```

2. **Consume Form Context**

```javascript
import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";

const StepOne = () => {
    const { formData, updateFormData } = useContext(FormContext);
    const [name, setName] = useState(formData.name);

    const handleNext = () => {
        updateFormData({ name });
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

const StepTwo = () => {
    const { formData, updateFormData } = useContext(FormContext);
    const [email, setEmail] = useState(formData.email);

    const handleNext = () => {
        updateFormData({ email });
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

const FormReview = () => {
    const { formData } = useContext(FormContext);

    return (
        <div>
            <h2>Review Your Information</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <StepOne />
            <StepTwo />
            <FormReview />
        </div>
    );
};
```

3. **Wrap Application**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FormProvider } from "./FormContext";

ReactDOM.render(
    <FormProvider>
        <App />
    </FormProvider>,
    document.getElementById("root")
);
```

---

### **Example 9: Preferences Context**

Manage user preferences like theme and language settings.

1. **Create Preferences Context**

```javascript
import React, { createContext, useState } from "react";

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const [preferences, setPreferences] = useState({
        theme: "light",
        language: "en",
    });

    const setTheme = (theme) => setPreferences((prev) => ({ ...prev, theme }));
    const setLanguage = (language) =>
        setPreferences((prev) => ({ ...prev, language }));

    return (
        <PreferencesContext.Provider
            value={{ preferences, setTheme, setLanguage }}
        >
            {children}
        </PreferencesContext.Provider>
    );
};
```

2. **Consume Preferences Context**

```javascript
import React, { useContext } from "react";
import { PreferencesContext } from "./PreferencesContext";

const ThemeSwitcher = () => {
    const { setTheme } = useContext(PreferencesContext);

    return (
        <div>
            <button onClick={() => setTheme("light")}>Light Theme</button>
            <button onClick={() => setTheme("dark")}>Dark Theme</button>
        </div>
    );
};

const LanguageSwitcher = () => {
    const { setLanguage } = useContext(PreferencesContext);

    return (
        <div>
            <button onClick={() => setLanguage("en")}>English</button>
            <button onClick={() => setLanguage("es")}>Spanish</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    );
};
```

3. **Wrap Application**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PreferencesProvider } from "./PreferencesContext";

ReactDOM.render(
    <PreferencesProvider>
        <App />
    </PreferencesProvider>,
    document.getElementById("root")
);
```

---

These examples illustrate how the Context API can be used for complex and real-world app functionality, such as handling user authentication, managing an e-commerce cart, processing multi-step forms, or providing global preferences for theme and language settings.
