class Atom {
  constructor(name) {
    this.name = name;
  }
}

var escape_double_quote = (s) => {
	return s.replace(/"/g, '\\"')
}

var build = (v) => {
	if(v.constructor.name == 'Atom') {
		return v.name
	} else if(typeof v == 'number') {
		return v.toString()
	} else if(typeof v == 'string') {
		return `"${escape_double_quote(v)}"`
	} else if (Array.isArray(v)) {
		return array_to_list(v)
	} else if (typeof v == 'object') {
		return dict_to_assoc(v)
	} else if (typeof v == 'boolean') {
		return v ? "#t" : "#f"
	} else {
		console.error(typeof v)
		throw 'Unsupported type'
	}
}

var array_to_list = (a) => {
	var l = ["list"]
	a.forEach((e) => {
		l.push(build(e))
	})
	return `(${l.join(" ")})`
}

var dict_to_assoc = (d) => {
	var l = []
	Object.keys(d).forEach((k) => {
		var v = build(d[k])
		l.push(`(${k} . ${v})`)
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

