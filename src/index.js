class _Symbol {
  constructor(name) {
    this.name = name;
  }
}

var escape_double_quote = (s) => {
	return s.replace(/"/g, '\\"')
}

var build = (v) => {
	if(!v) {
		return "'null"
	} else if(v.constructor.name == '_Symbol') {
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

	return `(assoc (${l.join(" ")}))`
}


var symbol = (n) => {
	return new _Symbol(n)
}

module.exports = {
	symbol: symbol,
	build: build,
}

