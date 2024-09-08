// Error Handling
try {
    name;
    console.log("hello");
} catch (error) {
    console.log("hi");
    console.log(error.message);
}

/**
 *
 * * Note:
 *  => If error occure in try block, control jump to the catch block.
 *  => if any code throw error always wrap it by try block.
 *
 */
