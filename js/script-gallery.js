
var pics = JSON.parse(photos);
console.log(pics);

var html = "";
for (let i=0; i<pics.length; i++) {
	html += `<div class="grid-item col-sm-6 col-md-4"><div class="grid-item-content"><img src="img/${pics[i].file}"></div></div>`;
}

document.getElementById("test").innerHTML += html;

function loadMasonry () {

$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		transitionDuration: '0.2s'
	})
}

loadMasonry();

setTimeout("loadMasonry()", 100);

// onload, onready
// $(document).ready(function(){})
// document.readystate
