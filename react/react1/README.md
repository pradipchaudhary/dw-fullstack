# React Note

### Note:-

-   Tag consider as data
-   Component is a function whose first letter is capital
-   React return only one wrapper (function return one element)

## React Form

1. form action

```js
<form onSubmit={submitHandler}>
    // form data here..
    <label>Username</label>
    <input
        type="text"
        id="username"
        name="username"
        value={username}
        placeholder="Enter your username"
    />
</form>
```

1. Select Checkbox value from Form

```js
const [isMarried, setIsMarried] = useState(false);

<input
    type="checkbox"
    id="isMarried"
    name="isMarried"
    checked={isMarried}
    onChange={(e) => setIsMarried(e.target.checked)}
/>;
```

```markdown
-   for all - value -> e.target.value
-   for checkbox - checked -> e.target.checked
-   for radio - checked -> e.target.value

> Select and Radio has option value
```

<!-- Note :  -->

> how to api hite using form
