const toggle = (id) => {
	hideAll(id);
	document.getElementById(id).parentElement.children[1].style.display = document.getElementById(id).parentElement.children[1].style.display !== 'block' ? 'block' : 'none';
}

const handleSelect = (id, val) => {
	document.getElementById(id).innerHTML = val;
	hideAll();
};

const hideAll = (id = null) => {
	const elems = document.getElementsByTagName('ul');
	const len = elems.length;
	for (let i = 0; i < len; i ++) {
		if (id !== null) {
			elems[i].parentElement.children[0].id !== id && (elems[i].style.display = 'none');
		} else {
			elems[i].style.display = 'none';
		}
	}
};