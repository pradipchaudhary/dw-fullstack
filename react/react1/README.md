# React Note

### Note:-

-   Tag consider as data
-   Component is a function whose first letter is capital
-   React return only one wrapper (function return one element)

## React Form

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
