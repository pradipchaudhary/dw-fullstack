/**
 *
 *  ! Filter Methods
 * use case
 * [1,2,3] => [1,3]  use filter
 * [1,2,3]= [1,10]  cant use filter
 * [{name:"nitan",age:30}, {name;"ram",age:100}] => ["nitan", "ram"] cant use filter because input element is obj but output element is string
 * [{name:"nitan",age:30}, {name;"ram",age:100}] => [{name:"nitan", age:30}]  => use filter
 * [{name:"nitan",age:30}, {name;"ram",age:100}] => [{name:"nitan", age:40}]  => cant use filter
 *
 * Syntax ==> array.filter(callback(element[, index[, array]])[, thisArg])
 * 
 *  array.filter(callback(element[, index[, array]])[, thisArg])
    callback: A function that is called for every element in the array. It receives three arguments:
    element: The current element being processed in the array.
    index (optional): The index of the current element being processed in the array.
    array (optional): The array filter was called upon.
    thisArg (optional): A value to use as this when executing the callback function.
 *
    
 *
 */
