# Selectors

Selectors in CSS are patterns used to select and style elements in an HTML document. They allow you to target specific elements, groups of elements, or elements based on their attributes and relationships with other elements. Understanding CSS selectors is fundamental to effectively applying styles to your web pages. Here's a comprehensive guide to CSS selectors:

### 1. Type Selector

Selects all elements of a specified type.

```css
/* Selects all <p> elements */
p {
    color: blue;
}
```

### 2. Class Selector

Selects elements with a specific class attribute.

```css
/* Selects all elements with class="highlight" */
.highlight {
    background-color: yellow;
}
```

### 3. ID Selector

Selects a specific element with a unique ID attribute.

```css
/* Selects the element with id="main-content" */
#main-content {
    font-size: 16px;
}
```

### 4. Attribute Selector

Selects elements based on the presence or value of their attributes.

-   **Attribute presence**

    ```css
    /* Selects all elements with a "href" attribute */
    [href] {
        color: blue;
    }
    ```

-   **Attribute value**

    ```css
    /* Selects all elements with a "type" attribute equal to "text" */
    input[type="text"] {
        border: 1px solid #ccc;
    }
    ```

-   **Attribute starts with**

    ```css
    /* Selects all elements with a "href" attribute starting with "https://" */
    [href^="https://"]
    {
        color: green;
    }
    ```

-   **Attribute ends with**

    ```css
    /* Selects all elements with a "src" attribute ending with ".png" */
    [src$=".png"] {
        border: 1px solid red;
    }
    ```

-   **Attribute contains**
    ```css
    /* Selects all elements with a "class" attribute containing "item" */
    [class*="item"] {
        background-color: #f0f0f0;
    }
    ```

### 5. Universal Selector

Selects all elements on the page.

```css
/* Applies margin to all elements */
* {
    margin: 0;
    padding: 0;
}
```

### 6. Descendant Selector

Selects an element that is a descendant of another specified element.

```css
/* Selects all <li> elements that are descendants of <ul> elements */
ul li {
    list-style-type: square;
}
```

### 7. Child Selector

Selects direct children of an element.

```css
/* Selects all <li> elements that are direct children of <ul> elements */
ul > li {
    padding-left: 20px;
}
```

### 8. Adjacent Sibling Selector

Selects an element that is directly adjacent to another specified element.

```css
/* Selects <p> elements that are directly preceded by another <p> element */
p + p {
    margin-top: 20px;
}
```

### 9. General Sibling Selector

Selects all elements that are siblings of a specified element.

```css
/* Selects all <p> elements that are siblings of another <p> element */
p ~ p {
    border-bottom: 1px solid #ccc;
}
```

### 10. Pseudo-classes

Pseudo-classes are keywords added to selectors that specify a special state of the selected elements. Common pseudo-classes include:

-   **`:hover`**: Selects an element when you mouse over it.

    ```css
    /* Styles links when hovered over */
    a:hover {
        color: red;
    }
    ```

-   **`:focus`**: Selects an element when it is focused.

    ```css
    /* Styles input fields when focused */
    input:focus {
        border-color: blue;
    }
    ```

-   **`:first-child`**: Selects the first child of a specified element.

    ```css
    /* Styles the first <p> element within any <div> */
    div > p:first-child {
        font-weight: bold;
    }
    ```

-   **`:last-child`**: Selects the last child of a specified element.

    ```css
    /* Styles the last <li> element within any <ul> */
    ul > li:last-child {
        font-style: italic;
    }
    ```

-   **`:nth-child(n)`**: Selects elements based on their ordinal position (index) in relation to their parent.

    ```css
    /* Selects every second <div> element */
    div:nth-child(2n) {
        background-color: #f0f0f0;
    }
    ```

-   **`:nth-of-type(n)`**: Selects elements of a specified type based on their ordinal position.

    ```css
    /* Selects every odd <p> element */
    p:nth-of-type(odd) {
        color: red;
    }
    ```

<!-- ### 2. User Action Pseudo-classes -->

These pseudo-classes target elements based on user interaction:

-   **`:hover`**: Applies styles when an element is hovered over by the mouse pointer.

    ```css
    /* Changes the background color of links on hover */
    a:hover {
        background-color: lightblue;
    }
    ```

-   **`:focus`**: Applies styles when an element has focus (usually by tabbing through form elements or clicking on them).

    ```css
    /* Changes the border color of input fields when focused */
    input:focus {
        border-color: #ccc;
    }
    ```

-   **`:active`**: Applies styles when an element is being activated (e.g., clicked).

    ```css
    /* Changes the text color of buttons when clicked */
    button:active {
        color: green;
    }
    ```

<!-- ### 3. Form-related Pseudo-classes -->

\*\*These pseudo-classes target form elements based on their state:

-   **`:checked`**: Selects checked checkboxes or radio buttons.

    ```css
    /* Styles the label of checked checkboxes */
    input[type="checkbox"]:checked + label {
        font-weight: bold;
    }
    ```

-   **`:disabled`**: Selects disabled form elements.

    ```css
    /* Styles disabled input fields */
    input:disabled {
        opacity: 0.5;
    }
    ```

<!-- ### 4. Language-based Pseudo-classes -->

These pseudo-classes are used to style elements based on the language setting of the document:

-   **`:lang(language)`**: Selects elements based on the specified language.

    ```css
    /* Styles paragraphs in French */
    p:lang(fr) {
        font-style: italic;
    }
    ```

-   **`:not(selector)`**: Selects elements that do not match a specific selector.

    ```css
    /* Styles all <li> elements except the first one */
    li:not(:first-child) {
        margin-left: 20px;
    }
    ```

-   **`:empty`**: Selects elements that have no children or text content.

    ```css
    /* Styles empty <div> elements */
    div:empty {
        background-color: #f0f0f0;
    }
    ```

### 11. Pseudo-elements

In CSS, pseudo-elements allow you to style certain parts of an element. They are denoted by double colons (`::`) followed by the name of the pseudo-element. Pseudo-elements are used to add decorative elements to the document tree that are not directly represented by the HTML markup. Here are some commonly used pseudo-elements and their purposes:

-   **`::before`**: Inserts content before an element's content.

    ```css
    /* Adds a double quote before each <q> element */
    q::before {
        content: '"';
    }
    ```

-   **`::after`**: Inserts content after an element's content.
    ```css
    /* Adds a double quote after each <q> element */
    q::after {
        content: '"';
    }
    ```
-   **`::first-line`**: Allows styling of the first line of text within an element.

    Example:

    ```css
    p::first-line {
        font-weight: bold;
        color: #333;
    }
    ```

-   **`::first-letter`**: Allows styling of the first letter of text within an element.

    Example:

    ```css
    p::first-letter {
        font-size: 150%;
        float: left;
        margin-right: 5px;
    }
    ```

-   **`::selection`**: Allows styling of the portion of an element that is selected by the user.

    Example:

```css
::selection {
    background-color: #ffa500; /* Orange */
    color: #fff; /* White text */
}
```

-   **`::placeholder`**: Allows styling of the placeholder text in form inputs.

    Example:

```css
input::placeholder {
    color: #999;
    font-style: italic;
}
```

-   **`::marker`**: Allows styling of the marker of list items (`<li>` elements).

    Example:

```css
li::marker {
    color: #007bff; /* Blue */
    font-weight: bold;
}
```

-   **`::backdrop`**: Allows styling of the backdrop of a `<dialog>` element.

    Example:

```css
dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
}
```

#### **Benefits of Pseudo-elements**

-   **Enhanced Styling**: Allows for more refined and customized styling of elements without adding extra HTML markup.
-   **Accessibility**: Helps improve accessibility by providing visual enhancements and cues.

-   **Consistency**: Maintains clean and semantic HTML while achieving complex styling effects.

### Combining Selectors

Selectors can be combined to target specific elements more precisely.

```css
/* Selects all <a> elements with class="external" that are direct children of <nav> elements */
nav > a.external {
    color: green;
}
```

### Specificity

CSS specificity determines which styles are applied to an element when multiple rules could apply. Specificity is based on the type of selector used, and inline styles override styles in external stylesheets.

### Conclusion
