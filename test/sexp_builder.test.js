const atom = require('../src/index').atom
const build = require('../src/index').build

test('basic test', () => {

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

	expect(s).toEqual('(Wait (assoc (a . 1) (b . "\\"two\\"") (c . (1 "TWO" (3 3 3))) (d . (assoc (A . 11) (B . 22)))))')
})
