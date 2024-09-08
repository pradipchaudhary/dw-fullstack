# Flexbox

Flexbox, or the Flexible Box Layout, is a CSS layout module designed to help you build complex layouts more efficiently and predictably. It is particularly useful for creating responsive web designs. Flexbox provides a set of properties and concepts that make it easier to design flexible and adaptive layout structures without using float or positioning.

### Key Concepts and Properties

#### 1. **Flex Container**

The parent element that holds flex items. You define a flex container by setting its `display` property to `flex` or `inline-flex`.

```css
.container {
    display: flex; /* or inline-flex */
}
```

#### 2. **Flex Items**

The children of a flex container automatically become flex items.

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

### Flex Container Properties

1. **display**

    ```css
    .container {
        display: flex; /* or inline-flex */
    }
    ```

2. **flex-direction**
   Defines the direction of the main axis (horizontal or vertical).

    ```css
    .container {
        flex-direction: row; /* default, horizontal */
        /* or */
        flex-direction: row-reverse;
        flex-direction: column; /* vertical */
        flex-direction: column-reverse;
    }
    ```

3. **flex-wrap**
   Controls whether flex items should wrap onto multiple lines.

    ```css
    .container {
        flex-wrap: nowrap; /* default, no wrap */
        /* or */
        flex-wrap: wrap;
        flex-wrap: wrap-reverse;
    }
    ```

4. **flex-flow**
   A shorthand for `flex-direction` and `flex-wrap`.

    ```css
    .container {
        flex-flow: row wrap;
    }
    ```

5. **justify-content**
   Aligns flex items along the main axis.

    ```css
    .container {
        justify-content: flex-start; /* default */
        /* or */
        justify-content: flex-end;
        justify-content: center;
        justify-content: space-between;
        justify-content: space-around;
        justify-content: space-evenly;
    }
    ```

6. **align-items**
   Aligns flex items along the cross axis (perpendicular to the main axis).

    ```css
    .container {
        align-items: stretch; /* default */
        /* or */
        align-items: flex-start;
        align-items: flex-end;
        align-items: center;
        align-items: baseline;
    }
    ```

7. **align-content**
   Aligns flex lines when there is extra space in the cross axis. It has no effect when there is only one line of flex items.

    ```css
    .container {
        align-content: stretch; /* default */
        /* or */
        align-content: flex-start;
        align-content: flex-end;
        align-content: center;
        align-content: space-between;
        align-content: space-around;
    }
    ```

### Flex Item Properties

1. **order**
   Controls the order in which flex items appear in the flex container.

    ```css
    .item {
        order: 2; /* default is 0 */
    }
    ```

2. **flex-grow**
   Defines the ability for a flex item to grow if necessary.

    ```css
    .item {
        flex-grow: 1; /* default is 0 */
    }
    ```

3. **flex-shrink**
   Defines the ability for a flex item to shrink if necessary.

    ```css
    .item {
        flex-shrink: 1; /* default */
        /* or */
        flex-shrink: 0; /* prevents the item from shrinking */
    }
    ```

4. **flex-basis**
   Defines the default size of an element before the remaining space is distributed.

    ```css
    .item {
        flex-basis: 200px; /* default is auto */
    }
    ```

5. **flex**
   A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

    ```css
    .item {
        flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
        /* or */
        flex: 2 1 200px; /* flex-grow: 2, flex-shrink: 1, flex-basis: 200px */
    }
    ```

6. **align-self**
   Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.

    ```css
    .item {
        align-self: auto; /* default */
        /* or */
        align-self: flex-start;
        align-self: flex-end;
        align-self: center;
        align-self: baseline;
        align-self: stretch;
    }
    ```

### Example

A practical example to demonstrate flexbox:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flexbox Example</title>
        <style>
            .container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
            .item {
                background-color: #4caf50;
                color: white;
                padding: 20px;
                margin: 10px;
                text-align: center;
                flex: 1 1 100px; /* flex-grow, flex-shrink, flex-basis */
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="item">Item 1</div>
            <div class="item">Item 2</div>
            <div class="item">Item 3</div>
        </div>
    </body>
</html>
```

This example creates a flex container that wraps its items, spaces them evenly, and centers them vertically within the viewport.

Flexbox is a powerful and versatile tool for creating responsive layouts with ease. It simplifies the process of aligning and distributing space among items within a container, making it an essential part of modern CSS layout techniques.
