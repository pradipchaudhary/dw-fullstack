Here are more unique real-world use-case examples of React's Context API:

---

### **Example 1: User Authentication Context**

Manage the user authentication state globally across your app.

1. **Create Auth Context**

```javascript
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
```

2. **Consume Auth Context**

```javascript
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return user ? <h1>Welcome, {user.name}</h1> : <h1>Please log in</h1>;
};

const LoginButton = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login({ name: "John Doe" });
    };

    return <button onClick={handleLogin}>Log In</button>;
};

const App = () => {
    return (
        <div>
            <Profile />
            <LoginButton />
        </div>
    );
};
```

3. **Wrap Application**

```javascript
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

---

### **Example 2: Cart Management Context**

A global cart management system for an e-commerce site.

1. **Create Cart Context**

```javascript
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prev) => prev.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
```

2. **Consume Cart Context**

```javascript
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartSummary = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                Total: ${cart.reduce((total, item) => total + item.price, 0)}
            </div>
        </div>
    );
};

const AddToCartButton = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return <button onClick={() => addToCart(item)}>Add to Cart</button>;
};

const App = () => {
    const item = { id: 1, name: "Laptop", price: 999 };

    return (
        <div>
            <AddToCartButton item={item} />
            <CartSummary />
        </div>
    );
};
```

3. **Wrap Application**

```javascript
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

---

### **Example 3: Multi-Step Form Context**

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

### **Example 4: Preferences Context**

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
