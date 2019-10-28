var clientLang = (navigator.language || navigator.userLanguage);
	if (clientLang.substring(0, 2) == "de") {
		location.replace("./de/index.html");
	}
	else {
		location.replace("./en/index.html");
	}