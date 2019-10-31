
var pics = JSON.parse(photos);

function appendToHtml(object, callback) {

	var html = "";
	for (let i=0; i<pics.length; i++) {
		html += `<div class="grid-item col-sm-6 col-md-4" onclick="showImage('../img/${pics[i].file}', '<p>${pics[i].text}</p>')"><div class="grid-item-content"><img src="../img/compressed_${pics[i].file}"></div></div>`;
	}
	console.log(html);
	document.getElementById("gallery-container").innerHTML += html;
	
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve();}, 500);
		});
}

function loadMasonry () {
	$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true,
			transitionDuration: 0
		});
}

if (document.getElementById("portrait")) {
	var pics = pics.filter(obj => {
	return obj.category === "portrait";});

	appendToHtml(pics).then(loadMasonry);

} else if (document.getElementById("street")) {
	var pics = pics.filter(obj => {
	return obj.category === "street";});

	appendToHtml(pics).then(loadMasonry);

} else if (document.getElementById("travel")) {
	var pics = pics.filter(obj => {
	return obj.category === "travel";});

	appendToHtml(pics).then(loadMasonry);

} else if (document.getElementById("nudeart")) {
	var pics = pics.filter(obj => {
	return obj.category === "akt";});

	appendToHtml(pics).then(loadMasonry);
}

var modal = document.getElementById("modal-root");
var modalImg = document.getElementById("image");
var modalCaption = document.getElementById("caption");

function showImage(image, caption) {
	modal.style.display = "block";
	modalImg.src = image;
	modalCaption.innerHTML = caption; 
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function rootclick() {
	modal.style.display = "none";
}

document.querySelector("#modal-root:not(#image)").addEventListener('click', rootclick, true);


