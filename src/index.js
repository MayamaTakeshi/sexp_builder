class Atom {
  constructor(name) {
    this.name = name;
  }
}

var escape_double_quote = (s) => {
	return s.replace(/"/g, '\\"')
}

var build = (v) => {
	var val
	if(v.constructor.name == 'Atom') {
		return v.name
	} else if(typeof v == 'number') {
		return v.toString()
	} else if(typeof v == 'string') {
		val = `"${escape_double_quote(v)}"`
	} else if (Array.isArray(v)) {
		val = array_to_list(v)
	} else if (typeof v == 'object') {
		val = dict_to_assoc(v)
	} else {
		console.log(typeof v)
		throw 'Unsupported type'
	}
	return val
}

var array_to_list = (a) => {
	var l = []
	a.forEach((e) => {
		l.push(build(e))
	})
	return `(${l.join(" ")})`
}

var dict_to_assoc = (d) => {
	var l = []
	Object.keys(d).forEach((k) => {
		var v = build(d[k])
		l.push(`("${k}" . ${v})`)
	})

	return `(${l.join(" ")})`
}


var atom = (n) => {
	return new Atom(n)
}

module.exports = {
	atom: atom,
	build: build,
}

