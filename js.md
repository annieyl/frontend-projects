
# js notes
[mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [yt video i watched](https://youtu.be/TjjKcgtlsY8?si=p4zQG06nyrYqLsaR)

- `<script>, <\script>` to run w/in html
- `<script src="file_name.js"></script>` to import

# basic 
## variables
- initializing values of variables w/ var and let is optional
- var = function scoped / global scope
- let = block scoped (only exists inside nearest pair of {})
- const = constant, can't be changed, block scoped
    - objects assigned to constants are not protected, so arrays, dicts, etc. can be assigned to const

## types, type conversion/equality, logical comparators
- type conversion with Number(), String(), ...
    - can also convert by adding empty string to a number
- things not true in strict equality `===` that are true in loose equality `==`?
    - "1" == 1, true == 1, null == undefined, "" = [], ...
    - use strict equality preferred
- Array.from() converts html/dom element (NodeList returned by container.children) into an array, so you can iterate thru it
- logical operators: &&, ||, and !


## conditionals
- if (condn) { } else if {} else {}
- switch statement
```
switch (value) 
    { 
        case value_of_value: 
            something;
            break; //BREAKS ARE NECESSARY or else you'll fall to the next case!
        default: ...
    }
```
## loops
- do while loops 
- while loops is `while (cond) {}`
- for loop: `for (let i = 0; i<10; i++) {}>` same as c++
    - or `for (let value of arr) {}` to iterate over iterable
    - `for (let [i,value] of arr.entries()) {}` is python's `enumerate()`


## functions
- `function fun(params=default){}`
- fun expression `const fun = function(param){}`
- `const fun = (param) => {fun body}`
    - can be one line i.e. `const greet = (name) => "hi" + name + "!"`
- rest params allow u to accept any number of args
    - `function addNums (...params) {}`
- methods that take functions
    - `arr.map( (num) => num*2 )` = `list1.mapp(lambda x: x*2)`
    - `reduce` accumulator and x
    - `filter`
    
# data structures 

## arrays
- do NOT have to be the same type
- can initialize w/ `new Array(int or variable)` to initialize an array with that many items
- `Array.from` to make array from anything that can be looped from ... such as strings
- indexing is the same as python
- accessing an index that doesn't exist gets u undefined behavior; assigning to a value that doesn't exist will create empty items up to the new value  ex `['array existing item', ... <empty values>, 'new value']`
- can destruct an array 
    - `const [x,y] = [1,2]` is python's `x,y = 1,2`
    - spread operator: `const [x,...y] = [1,2,3,4]` will result in `x=1, y=[2,3,4]`
- spread operator can be used to make a shallow copy
    - `const y = [...x]` where x is another array, makes a new array

### array methods
- `shift()` = `pop()` in python but from the front
- `push, pop` also exist (pushes to end of array)
- `indexOf()` = first occurrence, `lastIndexOf` also exists
- `includes()` checks if sth is in the array ex `arr2.includes("a")`
- `arr.concat(arr2)`, `arr.join()`, same as python
- `slice()` returns copy of section of array
- `splice(idx, # of items to delete)` = python's `list1.remove()`

## objects
- `obj = { field: val, field1:val1, field2:val2 }`
- can access objects with . notation i.e. `obj.field`
- add new field is as simple as setting `obj.new =val3`
- useful functions
    - Object.keys(obj)
    - Object.values(values)
- use **in** when iterating over! `for (let key in obj) {}`

## sets
- `const mySet = new Set()`
- methods: `add(), delete(), has(), size(), clear()` <-- clear clears entire set

## maps 
- `m = new Map( [[1,'one'], [2, 'two']]);`
- methods
    - `m.set(4,"four")`
    - `delete(4)`
    - `get(1)`
    - `has(1)`
    - `size()`
- `for (const [key,value] of m) {}`

# misc

## try-catching
```
try {

} catch (error) {
    console.error(error.message)
} finally {
    //always runs
}
```
- can throw ur own error w `throw new Error("AAAA")`

## this
- `this.val` within an object references fields within the object. DOES NOT WORK W ARROW FNS
    - the below will work

```
const person = {
    name: 'annie',
    greet() {
        console.log('my name is $(this.name)`)
    }
}
```