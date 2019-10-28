
var pics = JSON.parse(photos);
console.log(pics);

/*console.time("test");
function appendToHtml(object, callback) {

var html = "";
for (let i=0; i<pics.length; i++) {
	html += `<div class="grid-item col-sm-6 col-md-4"><div class="grid-item-content"><img src="img/${pics[i].file}"></div></div>`;
}

document.getElementById("test").innerHTML += html;
setTimeout(function() {callback();}, 100);
}

function loadMasonry () {

$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		transitionDuration: '0.2s'
	})
}

appendToHtml(pics, loadMasonry);
*/

function appendToHtml(object, callback) {

	var html = "";
	for (let i=0; i<pics.length; i++) {
		html += `<div class="grid-item col-sm-6 col-md-4"><div class="grid-item-content"><img src="img/${pics[i].file}"></div></div>`;
	}

	document.getElementById("test").innerHTML += html;
	
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve();}, 20);
		});
}

function loadMasonry () {

$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		transitionDuration: '0.2s'
	})
}

appendToHtml(pics).then(loadMasonry);


/*
setTimeout("loadMasonry()", 100);*/

// onload, onready
// $(document).ready(function(){})
// document.readystate
maybe generator function? see: https://www.freecodecamp.org/news/javascript-from-callbacks-to-async-await-1cc090ddad99/
