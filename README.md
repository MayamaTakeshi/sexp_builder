# sexp_builder
Converts javascript values to s-expressions


```
const sb = require('sexp_builder')
const symbol = sb.symbol
const dottedPair = sb.dottedPair
const build = sb.build

var s = build([
	symbol('spec'), 
	{
		a: 1,
		b: '"two"',
		c: [1, "TWO", [3, 3, 3]],
		d: {
			A: dottedPair("me", "AAA"),
			B: dottedPair(symbol("you"), "BBB"),
		},
	},
])

console.log(s) // (spec (assoc (("a" . 1) ("b" . "\"two\"") ("c" . (1 "TWO" (3 3 3))) ("d" . (assoc (("A" . ("me" . "AAA")) ("B" . (you . "BBB"))))))))
```	
