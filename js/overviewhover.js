var elems = document.getElementsByClassName('hoverbox');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('mouseover', hover);
	elems[i].addEventListener('mouseout', leave);
}


function hover() {
	for (let i = 0; i < elems.length; i++) {
		elems[i].style.opacity = 1;
		elems[i].style.transform = "scale(0.92)";
	}
	this.style.transform = "scale(1.08)";
	this.style.opacity = 1;
}

function leave() {
	for (let i = 0; i < elems.length; i++) {
		elems[i].style.opacity = 1;
		elems[i].style.transform = "scale(1)";
	}
}