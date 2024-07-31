# Animations

CSS animations allow you to animate the transition of one CSS style to another over a period of time. Animations can be applied to various CSS properties, including color, size, position, and more. CSS animations consist of two main components: keyframes and the animation properties.

### Keyframes

Keyframes define the stages of the animation with specific styles at certain times. The `@keyframes` rule is used to create the keyframes.

```css
@keyframes example {
    from {
        background-color: red;
    }
    to {
        background-color: yellow;
    }
}
```

Or using percentages:

```css
@keyframes example {
    0% {
        background-color: red;
    }
    100% {
        background-color: yellow;
    }
}
```

### Animation Properties

To apply animations to an element, you use various animation properties.

1. **animation-name**
   Specifies the name of the `@keyframes` animation to apply.

    ```css
    .element {
        animation-name: example;
    }
    ```

2. **animation-duration**
   Defines how long the animation lasts. Default is `0s`.

    ```css
    .element {
        animation-duration: 4s;
    }
    ```

3. **animation-timing-function**
   Specifies the speed curve of the animation. Common values include `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, and more.

    ```css
    .element {
        animation-timing-function: ease-in-out;
    }
    ```

4. **animation-delay**
   Defines a delay before the animation starts. Default is `0s`.

    ```css
    .element {
        animation-delay: 2s;
    }
    ```

5. **animation-iteration-count**
   Specifies the number of times the animation should play. Can be a specific number or `infinite`.

    ```css
    .element {
        animation-iteration-count: infinite;
    }
    ```

6. **animation-direction**
   Defines whether the animation should play in reverse on alternate cycles. Values include `normal`, `reverse`, `alternate`, and `alternate-reverse`.

    ```css
    .element {
        animation-direction: alternate;
    }
    ```

7. **animation-fill-mode**
   Specifies how a CSS animation should apply styles to its target before and after it is executing. Values include `none`, `forwards`, `backwards`, and `both`.

    ```css
    .element {
        animation-fill-mode: forwards;
    }
    ```

8. **animation-play-state**
   Specifies whether the animation is running or paused. Values include `running` and `paused`.

    ```css
    .element {
        animation-play-state: paused;
    }
    ```

### Shorthand Property

The `animation` shorthand property combines all the animation properties into one declaration.

```css
.element {
    animation: example 4s ease-in-out 2s infinite alternate both;
}
```

### Example

Here's a complete example that animates a square from red to yellow and back:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSS Animation Example</title>
        <style>
            .box {
                width: 100px;
                height: 100px;
                background-color: red;
                animation: colorChange 4s ease-in-out infinite alternate;
            }

            @keyframes colorChange {
                0% {
                    background-color: red;
                }
                100% {
                    background-color: yellow;
                }
            }
        </style>
    </head>
    <body>
        <div class="box"></div>
    </body>
</html>
```

### Advanced Example with Multiple Properties

Animating multiple properties, such as size and position:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Advanced CSS Animation Example</title>
        <style>
            .box {
                width: 100px;
                height: 100px;
                background-color: blue;
                position: relative;
                animation: moveAndResize 5s ease-in-out infinite;
            }

            @keyframes moveAndResize {
                0% {
                    left: 0;
                    width: 100px;
                    height: 100px;
                }
                50% {
                    left: 200px;
                    width: 200px;
                    height: 200px;
                }
                100% {
                    left: 0;
                    width: 100px;
                    height: 100px;
                }
            }
        </style>
    </head>
    <body>
        <div class="box"></div>
    </body>
</html>
```

### Controlling Animations with JavaScript

You can control animations using JavaScript, which allows for more interactivity.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JavaScript-Controlled Animation</title>
        <style>
            .box {
                width: 100px;
                height: 100px;
                background-color: green;
                animation: rotate 4s linear infinite;
            }

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        </style>
    </head>
    <body>
        <button onclick="pauseAnimation()">Pause</button>
        <button onclick="playAnimation()">Play</button>
        <div class="box" id="animateBox"></div>

        <script>
            const box = document.getElementById("animateBox");

            function pauseAnimation() {
                box.style.animationPlayState = "paused";
            }

            function playAnimation() {
                box.style.animationPlayState = "running";
            }
        </script>
    </body>
</html>
```

CSS animations provide a powerful way to create engaging, dynamic user experiences without the need for JavaScript. They are widely supported in modern browsers and can be used to animate almost any CSS property.
