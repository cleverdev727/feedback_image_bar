const handleToggle = (e) => {
	if (e.children[1].style.display === 'block') {
		e.children[1].style.display = 'none';
	} else {
		const len = e.parentElement.children.length;
		const tds = e.parentElement.children;
		for (let i = 1; i < len; i ++) {
			tds[i].children[1].style.display = 'none';
		}
		e.children[1].style.display = 'block';
	}
}