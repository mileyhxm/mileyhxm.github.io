let carouselWidth = 600; 
let prevButton = document.getElementById('button-previous');
let nextButton = document.getElementById('button-next');
let imageRow = document.getElementById('carousel-image-row');

var captions = ["BELL TOWER", "CITY WALL", "TERRA COTTA WARRIORS", "GIAND WILD GOOSE PAGODA",
				"QUJIANG DISTRICT", "HI-TECH ZONE"];
var contents = ["The Bell Tower of Xi'an, built in 1384 during the early Ming Dynasty, is a symbol of the city of Xi'an and one of the grandest of its kind in China. The Bell Tower also contains several large bronze-cast bells from the Tang Dynasty.", 
				"The Xi'an City Wall represents one of the oldest, largest and best preserved Chinese city walls. It was built under the rule of the Hongwu Emperor Zhu Yuanzhang as a military defense system", 
				"The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE with the purpose of protecting the emperor in his afterlife. ", 
				"Giant Wild Goose Pagoda or Big Wild Goose Pagoda, is a Buddhist pagoda located in southern Xi'an, Shaanxi, China. It was built in 652 during the Tang dynasty and originally had five stories. ",
				"The Qujiang district was first created as a tourism district, which now becomes an economic centre with arts, luxury shopping, tourism, and hotels. It's particularly famous for the beautiful night scene.",
				"The Hi-tech Zone is the business center of Xi'an, located in the southwest corner of the city and characterized by skyscrapers and commercial buildings."];


let imageNum = 0;

function displayCaption(i) {
	let caption = captions[i];
	document.getElementById("caption").innerHTML = caption;
}

function displayContent(i) {
	let content = contents[i];
	document.getElementById("description").innerHTML = content;
}

displayCaption(imageNum);
displayContent(imageNum);

function showNextImage() {
	imageNum += 1;
	checkControls();
	let newPixelOffset = -carouselWidth * imageNum;
	imageRow.style.left = newPixelOffset + "px";
	displayCaption(imageNum);
	displayContent(imageNum);
}


nextButton.onclick = showNextImage;

function showPrevImage() {
	imageNum = imageNum - 1;
	checkControls();
	let newPixelOffset = -carouselWidth * imageNum;
	imageRow.style.left = newPixelOffset + "px";
	displayCaption(imageNum);
	displayContent(imageNum);
}

prevButton.onclick = showPrevImage;

let totalImages = document.getElementsByClassName('carousel-image').length;

function checkControls() {
	if (imageNum === 0) {
		prevButton.classList.add("hidden");
	} else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	if (imageNum === totalImages - 1) {
		nextButton.classList.add("hidden");
	} else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
}


