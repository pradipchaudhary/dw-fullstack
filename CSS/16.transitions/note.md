CSS transitions allow you to change property values smoothly (over a given duration) rather than abruptly. They are useful for animating changes to CSS properties, providing a more fluid user experience.

### Basic Concept

CSS transitions are defined using the `transition` property, which is shorthand for four individual properties:

-   `transition-property`
-   `transition-duration`
-   `transition-timing-function`
-   `transition-delay`

### Syntax

```css
.element {
    transition: property duration timing-function delay;
}
```

### Example Properties

1. **transition-property**
   Specifies the CSS property to which the transition is applied. You can specify multiple properties separated by commas, or use `all` to apply the transition to all changeable properties.

    ```css
    .element {
        transition-property: background-color, width;
    }
    ```

2. **transition-duration**
   Specifies the duration of the transition. Default is `0s`.

    ```css
    .element {
        transition-duration: 2s;
    }
    ```

3. **transition-timing-function**
   Specifies the speed curve of the transition. Common values include `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, and `cubic-bezier`.

    ```css
    .element {
        transition-timing-function: ease-in-out;
    }
    ```

4. **transition-delay**
   Specifies the delay before the transition starts. Default is `0s`.

    ```css
    .element {
        transition-delay: 1s;
    }
    ```

### Shorthand Property

The `transition` shorthand property combines all the transition properties into one declaration.

```css
.element {
    transition: background-color 2s ease-in-out 1s;
}
```

### Basic Example

Changing the background color of an element on hover:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSS Transition Example</title>
        <style>
            .box {
                width: 100px;
                height: 100px;
                background-color: red;
                transition: background-color 2s, transform 2s; /* Transition both background color and transform */
            }

            .box:hover {
                background-color: blue; /* Change background color on hover */
                transform: rotate(45deg); /* Rotate on hover */
            }
        </style>
    </head>
    <body>
        <div class="box"></div>
    </body>
</html>
```

### Advanced Example with Multiple Properties

Animating multiple properties such as size and opacity:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Advanced CSS Transition Example</title>
        <style>
            .box {
                width: 100px;
                height: 100px;
                background-color: green;
                opacity: 1;
                transition: width 2s, height 2s, opacity 2s, transform 2s;
            }

            .box:hover {
                width: 200px; /* Change width on hover */
                height: 200px; /* Change height on hover */
                opacity: 0.5; /* Change opacity on hover */
                transform: translateX(100px); /* Move right on hover */
            }
        </style>
    </head>
    <body>
        <div class="box"></div>
    </body>
</html>
```

### Timing Functions

Different timing functions provide different easing effects:

-   **ease**: Starts slow, speeds up, then slows down (default).
-   **linear**: Consistent speed throughout.
-   **ease-in**: Starts slow, then speeds up.
-   **ease-out**: Starts fast, then slows down.
-   **ease-in-out**: Starts slow, speeds up, then slows down.
-   **cubic-bezier(n,n,n,n)**: Custom cubic bezier curve.

```css
.box {
    transition: transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Custom easing */
}
```

### Delays and Multiple Transitions

Delays can be applied to start transitions after a certain time:

```css
.box {
    transition: transform 2s ease-in-out 1s; /* Delay of 1 second */
}
```

Multiple transitions can be applied by separating properties with commas:

```css
.box {
    transition: width 2s, height 2s, background-color 2s;
}
```

### Example: Button Hover Effect

A common use case for transitions is creating smooth button hover effects:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Button Hover Effect</title>
        <style>
            .button {
                padding: 10px 20px;
                background-color: #008cba;
                color: white;
                border: none;
                cursor: pointer;
                transition: background-color 0.3s, transform 0.3s;
            }

            .button:hover {
                background-color: #005f73;
                transform: scale(1.1); /* Slightly enlarge on hover */
            }
        </style>
    </head>
    <body>
        <button class="button">Hover me</button>
    </body>
</html>
```

### Combining with JavaScript

CSS transitions can be combined with JavaScript for more interactive animations:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JavaScript and CSS Transitions</title>
        <style>
            .box {
                width: 100px;
                height: 100px;
                background-color: purple;
                transition: all 2s;
            }
        </style>
    </head>
    <body>
        <div class="box" id="box"></div>
        <button onclick="changeBox()">Change Box</button>

        <script>
            function changeBox() {
                var box = document.getElementById("box");
                box.style.width = "200px";
                box.style.height = "200px";
                box.style.backgroundColor = "orange";
            }
        </script>
    </body>
</html>
```

CSS transitions provide a simple way to create smooth animations and improve user experience by making changes feel more natural and engaging. They are supported in all modern browsers and are a fundamental part of CSS for modern web design.
