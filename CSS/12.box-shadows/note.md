# Box Shadow

The `box-shadow` property in CSS is used to add shadow effects around an element's frame. You can specify multiple shadows separated by commas. The property has several values that define the shadow's appearance, including its color, size, and blur radius.

### Syntax

```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

-   **offset-x**: Required. The horizontal offset of the shadow. Positive values place the shadow to the right of the element, while negative values place it to the left.
-   **offset-y**: Required. The vertical offset of the shadow. Positive values place the shadow below the element, while negative values place it above.
-   **blur-radius**: Optional. The blur radius. The higher the number, the more blurred the shadow. Default is 0.
-   **spread-radius**: Optional. The spread radius. Positive values cause the shadow to expand and grow bigger, while negative values cause the shadow to shrink. Default is 0.
-   **color**: Optional. The color of the shadow. If omitted, the color will default to the current text color.

### Examples

1. **Simple Shadow**

    ```css
    .simple-shadow {
        box-shadow: 10px 10px; /* 10px right and 10px down */
    }
    ```

    ```html
    <div class="simple-shadow">Simple Shadow</div>
    ```

2. **Shadow with Blur**

    ```css
    .blur-shadow {
        box-shadow: 10px 10px 5px gray; /* 10px right, 10px down, 5px blur */
    }
    ```

    ```html
    <div class="blur-shadow">Shadow with Blur</div>
    ```

3. **Shadow with Spread**

    ```css
    .spread-shadow {
        box-shadow: 10px 10px 5px 2px gray; /* 10px right, 10px down, 5px blur, 2px spread */
    }
    ```

    ```html
    <div class="spread-shadow">Shadow with Spread</div>
    ```

4. **Inset Shadow**

    ```css
    .inset-shadow {
        box-shadow: inset 10px 10px 5px gray; /* Inset shadow */
    }
    ```

    ```html
    <div class="inset-shadow">Inset Shadow</div>
    ```

5. **Multiple Shadows**

    ```css
    .multiple-shadows {
        box-shadow: 10px 10px 5px gray, -10px -10px 5px red; /* Multiple shadows */
    }
    ```

    ```html
    <div class="multiple-shadows">Multiple Shadows</div>
    ```

### Advanced Example

Combining different properties to create complex shadow effects:

```css
.advanced-shadow {
    width: 200px;
    height: 100px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```

```html
<div class="advanced-shadow">Advanced Shadow</div>
```

### Box Shadow with Color and Opacity

Using `rgba` to control the color and opacity of the shadow:

```css
.color-opacity-shadow {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5); /* Semi-transparent black shadow */
}
```

```html
<div class="color-opacity-shadow">Color & Opacity Shadow</div>
```

### Interactive Example with Hover Effect

Creating a shadow effect that changes on hover:

```css
.hover-shadow {
    transition: box-shadow 0.3s ease-in-out;
}

.hover-shadow:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

```html
<div class="hover-shadow">Hover Shadow</div>
```

The `box-shadow` property is a powerful tool for enhancing the visual design of web elements, allowing for a wide range of shadow effects to create depth and emphasis.
