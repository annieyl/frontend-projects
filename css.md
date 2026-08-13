
# css notes
# good practices
- always apply `box-sizing: border-box;` to avoid having padding exceed the width of an object
- `cursor: pointer; ` for clickable objects

# media queries
- apply different styles based on device characteristics
- basic syntax:  `@media (width: 480px) { ... }` (can also use comparators like < and logical operators such as and, `,` = or, `not`)
- or orientation such as `(@media (orientation: landscape))`

# flexboxes
display: flex

[this was fun](https://flexboxfroggy.com)

### alignment**
- justify-content (horizontal movement): 
    - start, end, center, … 
- align-items (vertical movement) 
    - flex-start, flex-end, center, space-between, space-around 
- align-self: align-items but for a specific (child) item
- align-content: alignment of content relative to e/o (squeeze close, far, etc)
    - same params as align-items 

### direction/wrapping**
- flex-direction: 
    - column, row, row-reverse, etc. also flips stuff for justify-content and align-items
- flex-wrap: wrap, wrap-reverse
- flex-flow: flex-direction + flex-wrap (in that order)

## flexbox child elements
### grow/shrink
- flex: 1 1 0 (or flex: 1)
    - shorthand for flex-grow, flex-shrink, flex-basis params
- flex-grow: grow to take available free space
- flex-shrink: child shrinks if parent container runs out of room, is 1 by default
- flex-basis: default size

