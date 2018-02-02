const symbol = require('../src/index').symbol
const dottedPair = require('../src/index').dottedPair
const build = require('../src/index').build

test('basic test', () => {

	var s = build([
		symbol('Wait'),
		{
			a: 1,
			b: '"two"',
			c: [1, "TWO", [3, 3, 3]],
			d: {
				A: 11,
				B: 22,
			}
		},
	])

	expect(s).toEqual('(Wait (assoc (("a" . 1) ("b" . "\\"two\\"") ("c" . (1 "TWO" (3 3 3))) ("d" . (assoc (("A" . 11) ("B" . 22)))))))')
})

test('Using native Symbol and our symbol', () => {

	var s = build([
		Symbol('one'),
		symbol('two'),
		Symbol('three'),
	])

	expect(s).toEqual('(one two three)')
})

test('DottedPair', () => {

	var s = build([
		dottedPair('one', 1),
		dottedPair(symbol('two'), 2),
		dottedPair(Symbol('three'), 3),
		dottedPair('four', dottedPair(symbol('cuatro'), 4)),
	])

	expect(s).toEqual('(("one" . 1) (two . 2) (three . 3) ("four" . (cuatro . 4)))')
})
