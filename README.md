# sexp_builder
Converts javascript values to s-expressions


```
const symbol = require('sexp_builder').symbol
const build = require('sexp_builder').build

var s = build([
        symbol('Wait'), 
        {
                a: 1,
                b: '"two"',
                c: [1, "TWO", [3, 3, 3]],
                d: {
                        A: 11,
                        B: 22
                }
        }
])

console.log(s)
// (Wait (assoc (("a" . 1) ("b" . "\"two\"") ("c" . (1 "TWO" (3 3 3))) ("d" . (assoc (("A" . 11) ("B" . 22)))))))
```	
