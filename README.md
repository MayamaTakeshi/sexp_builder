# sexp_builder
Converts javascript values to s-expressions


```
const atom = require('sexp_builder).atom
const build = require('sexp_builder').build

var s = build([
        atom('Wait'), 
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

// OUTPUT: (Wait (("a" . 1) ("b" . "\"two\"") ("c" . (1 "TWO" (3 3 3))) ("d" . (("A" . 11) ("B" . 22)))))
```	
