# Media Queries

CSS media queries are a cornerstone of responsive web design. They allow you to apply styles based on the characteristics of the device rendering the content, such as its width, height, orientation, and resolution. This enables the creation of layouts that adapt to different screen sizes and devices, ensuring an optimal user experience.

### Basic Syntax

A media query consists of a media type and one or more expressions that check for the conditions of particular media features.

```css
@media media-type and (condition: value) {
    /* CSS rules here */
}
```

### Common Use Cases

1. **Responsive Layout**

    Applying different styles for different screen widths:

    ```css
    /* Styles for devices with a width of 600px or more */
    @media (min-width: 600px) {
        .container {
            width: 50%;
        }
    }

    /* Styles for devices with a width of less than 600px */
    @media (max-width: 599px) {
        .container {
            width: 100%;
        }
    }
    ```

2. **Orientation-Based Styles**

    Changing styles based on the device orientation:

    ```css
    /* Styles for landscape orientation */
    @media (orientation: landscape) {
        .container {
            background-color: lightblue;
        }
    }

    /* Styles for portrait orientation */
    @media (orientation: portrait) {
        .container {
            background-color: lightgreen;
        }
    }
    ```

3. **High-Resolution Displays**

    Targeting devices with high-resolution displays, such as Retina displays:

    ```css
    /* Styles for devices with a resolution of 2x or more */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .high-res {
            background-image: url("high-res-image.png");
        }
    }
    ```

4. **Combining Conditions**

    Using multiple conditions to create more specific rules:

    ```css
    /* Styles for devices with a width between 600px and 1200px in landscape orientation */
    @media (min-width: 600px) and (max-width: 1200px) and (orientation: landscape) {
        .container {
            padding: 20px;
            background-color: lightcoral;
        }
    }
    ```

### Example: Responsive Navigation Menu

A common use case for media queries is creating a responsive navigation menu:

```css
/* Default styles for mobile devices */
.nav {
    display: flex;
    flex-direction: column;
    background-color: #333;
}

.nav a {
    padding: 14px 20px;
    text-decoration: none;
    color: white;
    text-align: center;
}

/* Styles for devices with a width of 600px or more */
@media (min-width: 600px) {
    .nav {
        flex-direction: row;
    }

    .nav a {
        flex: 1;
    }
}
```

```html
<nav class="nav">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
</nav>
```

### Advanced Example: Responsive Grid Layout

Creating a responsive grid layout that adjusts the number of columns based on the screen width:

```css
.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
}

/* 2-column layout for screens 600px and wider */
@media (min-width: 600px) {
    .container {
        grid-template-columns: 1fr 1fr;
    }
}

/* 4-column layout for screens 1200px and wider */
@media (min-width: 1200px) {
    .container {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
```

```html
<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
</div>
```

### Testing Media Queries

To ensure media queries work correctly, test your design on various devices and screen sizes. You can use browser developer tools to simulate different devices and screen sizes.

### Best Practices

-   **Mobile First**: Start by designing for the smallest screens first, then add styles for larger screens using min-width media queries.
-   **Avoid Excessive Use**: Use media queries strategically to maintain simplicity and performance.
-   **Use Relative Units**: Prefer using relative units like percentages, ems, and rems for flexibility.

Media queries are a powerful tool for creating responsive designs that adapt to various devices and screen sizes, ensuring a consistent and user-friendly experience across all platforms.
