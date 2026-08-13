# html-css-js-projects
cramming learning frontend

# js notes
[mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [yt video i watched](https://youtu.be/TjjKcgtlsY8?si=p4zQG06nyrYqLsaR)

- `<script>, <\script>` to run w/in html
- `<script src="file_name.js"></script>` to import

## variables
- initializing values of variables w/ var and let is optional
- var = function scoped / global scope
- let = block scoped (only exists inside nearest pair of {})
- const = constant, can't be changed, block scoped
    - objects assigned to constants are not protected, so arrays, dicts, etc. can be assigned to const

## type conversion/equality
- type conversion with Number(), String(), ...
    - can also convert by adding empty string to a number
- things not true in strict equality `===` that are true in loose equality `==`?
    - "1" == 1, true == 1, null == undefined, "" = [], ...
- 

# css notes
## box-sizing
- always apply `box-sizing: border-box;` to avoid having padding exceed the width of an object

## media queries
- apply different styles based on device characteristics
- basic syntax:  `@media (width: 480px) { ... }` (can also use comparators like < and logical operators such as and, `,` = or, `not`)
- or orientation such as `(@media (orientation: landscape))`

## flexboxes
display: flex

[this was fun](https://flexboxfroggy.com)

**alignment**
- justify-content (horizontal movement): 
    - start, end, center, … 
- align-items (vertical movement) 
    - flex-start, flex-end, center, space-between, space-around 
- align-self: align-items but for a specific (child) item
- align-content: alignment of content relative to e/o (squeeze close, far, etc)
    - same params as align-items 

**direction/wrapping**
- flex-direction: 
    - column, row, row-reverse, etc. also flips stuff for justify-content and align-items
- flex-wrap: wrap, wrap-reverse
- flex-flow: flex-direction + flex-wrap (in that order)

### flexbox child elements
**grow/shrink** 
- flex: 1 1 0 (or flex: 1)
    - shorthand for flex-grow, flex-shrink, flex-basis params
- flex-grow: grow to take available free space
- flex-shrink: child shrinks if parent container runs out of room, is 1 by default
- flex-basis: default size

