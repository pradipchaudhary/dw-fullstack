Sure! Let's go through each method with a brief explanation and a corresponding example.

### Constants

-   **Math.E**: Euler's number.

    ```javascript
    console.log(Math.E); // 2.718281828459045
    ```

-   **Math.LN2**: Natural logarithm of 2.

    ```javascript
    console.log(Math.LN2); // 0.6931471805599453
    ```

-   **Math.LN10**: Natural logarithm of 10.

    ```javascript
    console.log(Math.LN10); // 2.302585092994046
    ```

-   **Math.LOG2E**: Base 2 logarithm of E.

    ```javascript
    console.log(Math.LOG2E); // 1.4426950408889634
    ```

-   **Math.LOG10E**: Base 10 logarithm of E.

    ```javascript
    console.log(Math.LOG10E); // 0.4342944819032518
    ```

-   **Math.PI**: Ratio of the circumference of a circle to its diameter.

    ```javascript
    console.log(Math.PI); // 3.141592653589793
    ```

-   **Math.SQRT1_2**: Square root of 1/2.

    ```javascript
    console.log(Math.SQRT1_2); // 0.7071067811865476
    ```

-   **Math.SQRT2**: Square root of 2.
    ```javascript
    console.log(Math.SQRT2); // 1.4142135623730951
    ```

### Methods

#### Basic Arithmetic

-   **Math.abs(x)**: Returns the absolute value of `x`.

    ```javascript
    console.log(Math.abs(-7.25)); // 7.25
    ```

-   **Math.ceil(x)**: Rounds `x` up to the nearest integer.

    ```javascript
    console.log(Math.ceil(1.4)); // 2
    ```

-   **Math.floor(x)**: Rounds `x` down to the nearest integer.

    ```javascript
    console.log(Math.floor(1.8)); // 1
    ```

-   **Math.round(x)**: Rounds `x` to the nearest integer.

    ```javascript
    console.log(Math.round(1.4)); // 1
    console.log(Math.round(1.5)); // 2
    ```

-   **Math.trunc(x)**: Returns the integer part of `x` by removing any fractional digits.
    ```javascript
    console.log(Math.trunc(1.9)); // 1
    ```

#### Exponential and Logarithmic Functions

-   **Math.exp(x)**: Returns `E` raised to the power of `x`.

    ```javascript
    console.log(Math.exp(1)); // 2.718281828459045 (Math.E)
    ```

-   **Math.expm1(x)**: Returns `E^x - 1`.

    ```javascript
    console.log(Math.expm1(1)); // 1.718281828459045
    ```

-   **Math.log(x)**: Returns the natural logarithm (base `E`) of `x`.

    ```javascript
    console.log(Math.log(1)); // 0
    ```

-   **Math.log1p(x)**: Returns the natural logarithm of `1 + x`.

    ```javascript
    console.log(Math.log1p(1)); // 0.6931471805599453
    ```

-   **Math.log10(x)**: Returns the base-10 logarithm of `x`.

    ```javascript
    console.log(Math.log10(100)); // 2
    ```

-   **Math.log2(x)**: Returns the base-2 logarithm of `x`.
    ```javascript
    console.log(Math.log2(8)); // 3
    ```

#### Power Functions

-   **Math.pow(base, exponent)**: Returns `base` raised to the power of `exponent`.

    ```javascript
    console.log(Math.pow(2, 3)); // 8
    ```

-   **Math.sqrt(x)**: Returns the square root of `x`.

    ```javascript
    console.log(Math.sqrt(16)); // 4
    ```

-   **Math.cbrt(x)**: Returns the cube root of `x`.
    ```javascript
    console.log(Math.cbrt(27)); // 3
    ```

#### Trigonometric Functions

-   **Math.sin(x)**: Returns the sine of `x` (in radians).

    ```javascript
    console.log(Math.sin(Math.PI / 2)); // 1
    ```

-   **Math.cos(x)**: Returns the cosine of `x` (in radians).

    ```javascript
    console.log(Math.cos(Math.PI)); // -1
    ```

-   **Math.tan(x)**: Returns the tangent of `x` (in radians).

    ```javascript
    console.log(Math.tan(Math.PI / 4)); // 1
    ```

-   **Math.asin(x)**: Returns the arcsine of `x` (in radians).

    ```javascript
    console.log(Math.asin(1)); // 1.5707963267948966 (Math.PI / 2)
    ```

-   **Math.acos(x)**: Returns the arccosine of `x` (in radians).

    ```javascript
    console.log(Math.acos(-1)); // 3.141592653589793 (Math.PI)
    ```

-   **Math.atan(x)**: Returns the arctangent of `x` (in radians).

    ```javascript
    console.log(Math.atan(1)); // 0.7853981633974483 (Math.PI / 4)
    ```

-   **Math.atan2(y, x)**: Returns the arctangent of the quotient of its arguments.
    ```javascript
    console.log(Math.atan2(1, 1)); // 0.7853981633974483 (Math.PI / 4)
    ```

#### Hyperbolic Functions

-   **Math.sinh(x)**: Returns the hyperbolic sine of `x`.

    ```javascript
    console.log(Math.sinh(1)); // 1.1752011936438014
    ```

-   **Math.cosh(x)**: Returns the hyperbolic cosine of `x`.

    ```javascript
    console.log(Math.cosh(1)); // 1.5430806348152437
    ```

-   **Math.tanh(x)**: Returns the hyperbolic tangent of `x`.

    ```javascript
    console.log(Math.tanh(1)); // 0.7615941559557649
    ```

-   **Math.asinh(x)**: Returns the hyperbolic arcsine of `x`.

    ```javascript
    console.log(Math.asinh(1)); // 0.881373587019543
    ```

-   **Math.acosh(x)**: Returns the hyperbolic arccosine of `x`.

    ```javascript
    console.log(Math.acosh(2)); // 1.3169578969248166
    ```

-   **Math.atanh(x)**: Returns the hyperbolic arctangent of `x`.
    ```javascript
    console.log(Math.atanh(0.5)); // 0.5493061443340548
    ```

#### Miscellaneous

-   **Math.max(...values)**: Returns the largest of the zero or more numbers given as input parameters.

    ```javascript
    console.log(Math.max(1, 2, 3)); // 3
    ```

-   **Math.min(...values)**: Returns the smallest of the zero or more numbers given as input parameters.

    ```javascript
    console.log(Math.min(1, 2, 3)); // 1
    ```

-   **Math.random()**: Returns a pseudo-random number between 0 and 1.

    ```javascript
    console.log(Math.random()); // Random number between 0 and 1
    ```

-   **Math.sign(x)**: Returns the sign of the number, indicating whether the number is positive, negative, or zero.

    ```javascript
    console.log(Math.sign(-10)); // -1
    console.log(Math.sign(0)); // 0
    console.log(Math.sign(10)); // 1
    ```

-   **Math.hypot(...values)**: Returns the square root of the sum of squares of its arguments.
    ```javascript
    console.log(Math.hypot(3, 4)); // 5
    ```

These examples should provide you with a clear understanding of how to use each method of the `Math` object in JavaScript.
