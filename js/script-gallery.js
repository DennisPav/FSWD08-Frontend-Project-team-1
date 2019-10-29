
var pics = JSON.parse(photos);

$('body').click(function (event) {
	if(!$(event.target).closest('#myModal').length && !$(event.target).is('#myModal')) {
		$()
	}
})

function appendToHtml(object, callback) {

	var html = "";
	for (let i=0; i<pics.length; i++) {
		html += `<div class="grid-item col-sm-6 col-md-4" onclick="showImage('../img/${pics[i].file}')"><div class="grid-item-content"><img src="../img/${pics[i].file}"></div></div>`;
	}
	console.log(html);
	document.getElementById("gallery-container").innerHTML += html;
	
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve();}, 50);
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

/*appendToHtml(pics).then(loadMasonry);*/

if (document.getElementById("portrait")) {
	var pics = pics.filter(obj => {
	return obj.category === "akt";});

	appendToHtml(pics).then(loadMasonry);
} else if (document.getElementById("street")) {
	var pics = pics.filter(obj => {
	return obj.category === "street";});

	appendToHtml(pics).then(loadMasonry);
} else if (document.getElementById("travel")) {
	var pics = pics.filter(obj => {
	return obj.category === "travel";});

	appendToHtml(pics).then(loadMasonry);
} else {
	var pics = pics.filter(obj => {
	return obj.category === "diverse";});

	appendToHtml(pics).then(loadMasonry);
}



var modal = document.getElementById("modal-root");
var modalImg = document.getElementById("image");

function showImage(image) {
	modal.style.display = "block";
	modalImg.src = image;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


// document.getElementById("modal-root").addEventListener('click', rootclick, false);
document.querySelector("#modal-root:not(#image)").addEventListener('click', rootclick, true);

/*$("#modal-root").not("#image").addEventListener('click', rootclick)*/;

function rootclick() {
	modal.style.display = "none";
}

/*
setTimeout("loadMasonry()", 100);*/

// onload, onready
// $(document).ready(function(){})
// document.readystate
/*maybe generator function? see: https://www.freecodecamp.org/news/javascript-from-callbacks-to-async-await-1cc090ddad99/*/


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