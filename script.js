let input = document.getElementById('hash_entry');
full_compute(input.value);
input.onkeyup = function() { full_compute(input.value); }

function full_compute(input) {
	compute(input, md5, 'md5_out');
	compute(input, sha1, 'sha1_out');
	js_sha(input, 'SHA-224', 'sha224_out');
	js_sha(input, 'SHA3-224', 'sha3224_out');
	compute(input, sha256, 'sha256_out');
	js_sha(input, 'SHA3-256', 'sha3256_out');
	js_sha(input, 'SHA-384', 'sha384_out');
	js_sha(input, 'SHA3-384', 'sha3384_out');
	js_sha(input, 'SHA-512', 'sha512_out');
	js_sha(input, 'SHA3-512', 'sha3512_out');

	document.getElementById('chars').innerHTML = chars_info(input);
}

function compute(input, hash, id) {
	let entry_value = input;
	let hash_value = hash(entry_value);
	document.getElementById(id).innerHTML = hash_value;
}

function js_sha(input, hash, id) {
	var shaObj = new jsSHA(hash, 'TEXT');
	shaObj.update(input);
	var hash = shaObj.getHash('HEX');
	document.getElementById(id).innerHTML = hash;
}

function chars_info(input) {
	let out = "";
	
	// https://mathiasbynens.be/notes/javascript-unicode
	let stringarr = Array.from(input);

	for (var i = 0; i < stringarr.length; i++) {
		let letter = stringarr[i];
		let code = letter.codePointAt();
		let hex_code = code.toString(16).toUpperCase();
		let unicode = "U+" + hex_code.padStart(4, '0');

		out += "<tr>" 
			+ "<td>Letter: <span class='char'>" + letter + "</span></td>"
			+ "<td>Code: " + code + " / 0x" + hex_code + "</td>"
			+ "<td>" + unicode + "</td>"
			+ "</tr>";
	}
	return out;
}

function parse_char(character) {
	character
}

function loadFile(url) {
	var xhr= new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange= function() {
		if (this.readyState !== 4) return;
		if (this.status !== 200) { // Error handling
			return;
		}
		// document.getElementById(htmlId).innerHTML = this.responseText;
		// window.history.pushState('page', 'Title', '#' + file);

		console.log(this.responseText);

		// Update EventListener for new urls
		listenUrls();
	}
	xhr.send();
}
